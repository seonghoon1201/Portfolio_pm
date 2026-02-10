'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  LayoutGrid,
  Rocket,
  Users,
  Code2,
  ShieldCheck,
  Mountain,
  GraduationCap,
  Flag,
  GitBranch,
  Sparkles,
} from 'lucide-react';

type RoleItemProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

type TimelineItem = {
  period: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  tags?: string[];
};

type StrengthItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

export default function LifeStorySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 },
    );
    const el = document.getElementById('story');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const timeline: TimelineItem[] = [
    {
      period: '학창 시절',
      title: '사람들과 함께 움직일 때 가장 몰입하는 성향',
      desc: '교우 관계가 항상 원만했고, 혼자 몰입하기보다 “함께 계획하고 실행하는 과정”에서 에너지를 얻었습니다. 자연스럽게 모임의 분위기를 만들고, 일정/역할을 정리하는 역할을 자주 맡았습니다.',
      icon: Sparkles,
      tags: ['협업 성향', '관계/분위기', '계획'],
    },
    {
      period: '대학 1학년',
      title: '동아리 활동을 통해 “운영의 현실”을 처음 체감',
      desc: '사람이 모이면 공지/활동/장비/규칙 같은 운영 요소가 서비스 품질을 좌우한다는 걸 현장에서 많이 경험했습니다. “왜 자꾸 불편이 반복될까?”를 고민하기 시작했습니다.',
      icon: Users,
      tags: ['운영 관점', '현장 문제 관찰'],
    },
    {
      period: '2020–2024',
      title: '300+ 규모 동아리 회장/임원진으로 조직 운영 리드',
      desc: '동아리의 규모가 커지며 다양한 활동(MT, 동아리 활동, 친목 활동 등)도 기획하고 실행하였고, 동아리 내 여러가지 사건/사고 대응과 사후 조치까지 책임지며 관계·의사결정·조율 역량을 체득했습니다. “좋은 운영은 구조에서 나온다”는 걸 확실히 배웠습니다.',
      icon: ShieldCheck,
      tags: ['리더십', '의사결정', '갈등 조율'],
    },
    {
      period: '운영 개선',
      title: '규칙·프로세스·시스템으로 반복 문제를 구조화',
      desc: '반복되는 이슈를 개인의 문제로 두지 않고, 규칙과 운영 기준으로 정리했습니다. 이후 운영이 안정화되며 구성원 만족도와 실행력이 함께 올라가는 흐름을 경험했습니다.',
      icon: Flag,
      tags: ['정책/규칙', '프로세스', '운영 안정화'],
    },
    {
      period: '캡스톤',
      title: '현장의 불편을 “제품 문제”로 바꾸고 결과로 증명',
      desc: '등산 활동에서 느꼈던 불편을 해결하기 위해 교내 캡스톤 경진대회에서 등산 관련 애플리케이션을 기획·설계·구현까지 연결했고, 좋은 결과(대상 수상)로까지 이어질 수 있었습니다. “문제정의 → 실행 → 개선”의 루프가 몸에 배었습니다.',
      icon: Mountain,
      tags: ['문제정의', '제품 실행', '개선'],
    },
    {
      period: '운영 시스템 구축',
      title: '동아리 홈페이지/장비 대여 시스템으로 운영 효율 개선',
      desc: '공지 전달과 장비 대여·반납이 원활하지 않은 문제를 해결하기 위해 동아리 홈페이지 시스템을 구축했습니다. 운영 관점에서 요구사항을 정리하고, 실제 사용 흐름이 굴러가도록 구조를 설계했습니다.',
      icon: LayoutGrid,
      tags: ['운영 시스템', '요구사항', '구조 설계'],
    },
    {
      period: '프로젝트 경험',
      title: '개발 경험이 ‘기획의 현실성’을 끌어올린 순간들',
      desc: '여러 프로젝트에서 기획과 개발을 함께 맡으며, 요구사항/예외/상태/API/데이터 흐름까지 고려한 “구현 가능한 기획”을 지향하게 되었습니다. 핸드오프의 정확도가 곧 팀의 속도라는 걸 체감했습니다.',
      icon: GitBranch,
      tags: ['핸드오프', 'API/데이터', '현실적 설계'],
    },
    {
      period: '현재',
      title: '사람과 시스템을 연결하는 PM/서비스 기획자로 성장',
      desc: 'AI 도구와 협업툴(Figma/Notion 등)을 적극 활용해 더 빠르게 정리하고, 더 명확히 합의하며, 실행과 개선을 끝까지 밀어붙이는 기획자가 되고자 합니다.',
      icon: GraduationCap,
      tags: ['PM', '서비스 기획', '협업', 'AI 활용'],
    },
  ];

  const strengths: StrengthItem[] = [
    {
      title: '운영 관점의 문제정의',
      desc: '현장에서 반복되는 불편을 “구조 문제”로 바꿔 정리합니다.',
      icon: ShieldCheck,
    },
    {
      title: '커뮤니케이션/조율',
      desc: '의견을 정리하고 합의점을 만들며 실행까지 끌고 갑니다.',
      icon: Users,
    },
    {
      title: '요구사항·예외·정책 설계',
      desc: '흐름/상태/예외를 정리해 “같은 그림”으로 구현하게 합니다.',
      icon: LayoutGrid,
    },
    {
      title: 'Dev-friendly 사고',
      desc: 'API·데이터 흐름을 이해해 현실적인 기획 판단이 가능합니다.',
      icon: Code2,
    },
    {
      title: '실행–피드백–개선 루프',
      desc: '결과로 검증하고, 개선을 반복해 완성도를 올립니다.',
      icon: Rocket,
    },
  ];

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
            My Story
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            운영 경험에서 시작된 문제정의가, 프로젝트 실행과 개선 루프로 이어져
            <br />
            PM/서비스 기획 역량이 되었습니다.
          </p>
        </div>

        {/* TOP: Summary + Role Fit */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* LEFT */}
          <Card className="border bg-card/70 backdrop-blur h-full overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">In One Paragraph</CardTitle>
              <p className="text-sm text-muted-foreground">
                저를 가장 짧고 명확하게 설명하면 이렇습니다.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                저는 사람이 모이고 규모가 커질수록 생기는 불편을 개인의 문제로
                두지 않고,
                <span className="font-medium"> 규칙·프로세스·시스템</span> 같은
                구조 문제로 정의해 해결해왔습니다.
                <br />
                300명 이상 규모의 동아리를 운영하며 의사결정과 갈등 조율, 실행
                관리의 현실을 배웠고, 반복되는 이슈는 기준과 운영 구조로 정리해
                조직을 안정화했습니다.
                <br />
                프로젝트에서는 요구사항·예외·상태·데이터 흐름을 먼저 정리해 팀이
                같은 그림으로 실행하도록 만들고, 실행 이후에는 피드백을 반영해
                개선을 반복하며 완성도를 끌어올렸습니다.
              </p>

              <div className="rounded-xl border bg-background/70 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">
                    제가 일하는 방식
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="px-3 py-1 rounded-md border bg-background">
                    불편 발견
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="px-3 py-1 rounded-md border bg-background">
                    문제 정의·구조화
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="px-3 py-1 rounded-md border bg-background">
                    실행 합의
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="px-3 py-1 rounded-md border bg-background">
                    개선 반복
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT */}
          <Card className="border bg-card/70 backdrop-blur h-full overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Role Fit</CardTitle>
              <p className="text-sm text-muted-foreground">
                제 경험이 가장 잘 발휘되는 업무 영역입니다.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <RoleItem
                icon={Users}
                title="운영·커뮤니티·플랫폼 PM"
                desc="규칙·프로세스·역할 정의로 운영을 안정화하고 반복 이슈를 구조로 해결"
              />
              <RoleItem
                icon={LayoutGrid}
                title="서비스 기획 (IA·정책·예외)"
                desc="흐름/상태/예외를 정리해 팀이 ‘같은 그림’으로 구현하도록 만드는 역할"
              />
              <RoleItem
                icon={Rocket}
                title="실행형 PM / 프로젝트 리드"
                desc="의사결정과 합의로 실행을 끝까지 밀고, 개선 사이클을 만들어내는 역할"
              />
              <RoleItem
                icon={Code2}
                title="Dev-friendly PM / PO"
                desc="개발 경험 기반으로 API·데이터 흐름을 이해해 현실적인 기획 판단을 수행"
              />
            </CardContent>
          </Card>
        </div>

        {/* MIDDLE: Timeline */}
        <Card
          className={`mt-8 border bg-card/70 backdrop-blur overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Timeline</CardTitle>
            <p className="text-sm text-muted-foreground">
              연대기 순서로 정리한 전환점들입니다.
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
                    className="relative flex gap-4 px-6 py-6 border-t first:border-t-0"
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

                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
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

        {/* BOTTOM: Strength Map (Graph-like, no numbers) */}
        <Card
          className={`mt-8 border bg-card/70 backdrop-blur transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Strength Map</CardTitle>
            <p className="text-sm text-muted-foreground">
              숫자 없이 “방향성”만 직관적으로 보이게 정리했습니다.
            </p>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border bg-background/70 p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <div className="font-semibold text-sm">{s.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function RoleItem({ icon: Icon, title, desc }: RoleItemProps) {
  return (
    <div className="flex gap-3 rounded-xl border bg-background/70 p-4 hover:border-primary/30 transition-colors">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div className="min-w-0">
        <div className="font-semibold text-sm">{title}</div>
        <p className="mt-1 text-sm text-muted-foreground text-pretty leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
