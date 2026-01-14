'use client';

import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sparkles,
  Users,
  ClipboardList,
  ShieldCheck,
  Mountain,
  LayoutGrid,
  Code2,
  Rocket,
  GraduationCap,
} from 'lucide-react';

type TimelineItem = {
  period: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags?: string[];
};

type Pill = {
  label: string;
  note?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function LifeStorySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    );
    const el = document.getElementById('story');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  // ✅ 연대기 순서로 정리
  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        period: '초·중·고 시절',
        title: '함께 계획하고 움직이는 걸 좋아했던 성향',
        desc: '관계가 원만했고, 혼자보다 사람들과 함께 목표를 정하고 실행하는 상황에서 에너지를 얻었습니다.',
        icon: Sparkles,
        tags: ['커뮤니케이션', '팀워크', '기획 성향'],
      },
      {
        period: '대학 1학년',
        title: '동아리에서 관계와 운영의 현장을 경험',
        desc: '사람들이 모이는 조직에서 무엇이 잘 되고, 무엇이 막히는지(공지·운영·활동)를 현장에서 체감했습니다.',
        icon: Users,
        tags: ['조직 경험', '운영 관점'],
      },
      {
        period: '2020 ~ 2024',
        title: '동아리 회장·임원진으로 운영을 리드',
        desc: '300명 이상으로 규모가 커지며 활동을 확장(MT 등)했고, 사건/사고 대응과 사후 조치까지 책임지며 운영 역량을 키웠습니다.',
        icon: ShieldCheck,
        tags: ['리더십', '의사결정', '조율'],
      },
      {
        period: '운영 개선',
        title: '규칙·프로세스·시스템의 필요를 깨닫다',
        desc: '사람이 늘수록 문제는 반복되었고, 해결은 “구조”에서 시작된다는 걸 배웠습니다. 이후 동아리 규칙과 운영 기준을 수립했습니다.',
        icon: ClipboardList,
        tags: ['정책/규칙', '프로세스 설계'],
      },
      {
        period: '대학 프로젝트',
        title: '현장의 불편을 제품 문제로 바꾸다',
        desc: '등산 활동에서 느낀 불편을 해결하기 위해 캡스톤에서 등산 안전 앱을 기획·개발했고, 좋은 결과를 얻었습니다.',
        icon: Mountain,
        tags: ['문제정의', 'UX', '실행'],
      },
      {
        period: '동아리 운영 시스템',
        title: '홈페이지·장비 대여 시스템으로 운영 효율 개선',
        desc: '공지 전달과 장비 대여/반납이 원활하지 않은 문제를 해결하기 위해 시스템을 기획·구현했고, 장비 유실률을 0%로 만들었습니다.',
        icon: LayoutGrid,
        tags: ['운영 개선', '시스템 설계'],
      },
      {
        period: '개발 경험',
        title: '프론트엔드 이해로 “실행 가능한 기획”을 강화',
        desc: '개발은 주 목적이 아니라, 핸드오프 정확도와 예외/상태 정의, 일정/난이도 판단을 더 현실적으로 하기 위한 기반으로 쌓아왔습니다.',
        icon: Code2,
        tags: ['핸드오프', 'API/데이터 흐름'],
      },
      {
        period: '현재',
        title: '사람과 시스템을 잇는 서비스 기획자/PM',
        desc: '사용자 문제를 구조화하고, 협업툴과 문서로 합의를 만들며, 개선을 반복하는 기획자로 성장하고 있습니다.',
        icon: GraduationCap,
        tags: ['PM', '서비스 기획', '협업'],
      },
    ],
    []
  );

  // ✅ 수치 없이 “역량 칩” 형태로 보여주기
  const capabilityPills: Pill[] = useMemo(
    () => [
      {
        label: '커뮤니케이션·조율',
        note: '다양한 이해관계자 사이 합의/정리',
        icon: Users,
      },
      {
        label: '운영·프로세스 설계',
        note: '규칙/절차/역할 기반 운영 구조화',
        icon: ClipboardList,
      },
      {
        label: '문제정의 → 실행',
        note: '불편을 과제로 전환하고 끝까지 실행',
        icon: Rocket,
      },
      {
        label: '협업툴 기반 문서화',
        note: 'Figma/Notion 중심의 결정사항 기록',
        icon: LayoutGrid,
      },
      {
        label: '개발 이해(보조 역량)',
        note: 'API/상태/예외를 고려한 현실적 설계',
        icon: Code2,
      },
    ],
    []
  );

  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Life & Perspective
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            My Journey
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            관계를 만들고 운영을 개선해 온 경험이, ‘사람과 시스템을 잇는
            기획’으로 이어졌습니다.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left: Timeline */}
          <Card className="lg:col-span-3 border bg-card/70 backdrop-blur overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Timeline</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                연대기 순서로 정리한 “전환점”들
              </p>
            </CardHeader>

            <CardContent className="p-0">
              <ol className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border/70" />

                {timeline.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <li
                      key={idx}
                      className="relative flex gap-4 px-6 py-5 border-t first:border-t-0"
                    >
                      <div className="relative z-10">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-border/60">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-xs font-medium px-2 py-1 rounded-full border bg-background/70 text-muted-foreground">
                            {t.period}
                          </span>
                          <h3 className="font-semibold text-foreground">
                            {t.title}
                          </h3>
                        </div>

                        <p className="mt-2 text-sm text-muted-foreground text-pretty">
                          {t.desc}
                        </p>

                        {t.tags?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {t.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md border bg-background/70 text-foreground/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </CardContent>
          </Card>

          {/* Right: Capabilities (no numbers) */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border bg-card/70 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Capabilities</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  경험을 통해 쌓아온 역량을 키워드로 정리했습니다.
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                {capabilityPills.map((c) => {
                  const Icon = c.icon ?? Sparkles;
                  return (
                    <div
                      key={c.label}
                      className="rounded-xl border bg-background/70 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </span>
                        <div className="min-w-0">
                          <div className="font-semibold">{c.label}</div>
                          {c.note ? (
                            <p className="mt-1 text-sm text-muted-foreground text-pretty">
                              {c.note}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Highlight box */}
            <Card className="border bg-card/70 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">What I Value</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="text-pretty">
                  규모가 커질수록 문제는 “사람”이 아니라 “구조”에서 반복된다는
                  걸 운영 경험으로 배웠습니다.
                </p>
                <p className="text-pretty">
                  그래서 저는 기능을 나열하기보다, 규칙/예외/역할/흐름을 정리해
                  팀이 실행할 수 있는 형태로 만드는 것을 중요하게 생각합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
