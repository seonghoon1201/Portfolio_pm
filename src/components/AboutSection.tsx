'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Lightbulb,
  Users,
  ListChecks,
  BarChart3,
  Sparkles,
  ClipboardList,
} from 'lucide-react';
import Image from 'next/image';
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: '문제정의·목표·우선순위',
      description:
        '리서치/피드백을 근거로 문제를 한 문장으로 정리하고, 목표·범위·우선순위를 합의합니다.',
    },
    {
      icon: Users,
      title: '사용자 관점 리서치 정리',
      description:
        '인터뷰/설문/관찰 내용을 페르소나·저니·JTBD로 구조화해 요구사항으로 연결합니다.',
    },
    {
      icon: ListChecks,
      title: 'IA·플로우·정책 설계',
      description:
        '정보구조(IA)와 핵심 플로우, 예외/권한/상태(에러·빈 결과 등) 정책을 명확히 정의합니다.',
    },
    {
      icon: ClipboardList,
      title: 'PRD·요구사항 명세',
      description:
        '기능 정의, 수용 기준(AC), 엣지케이스까지 포함해 개발·QA가 흔들리지 않게 문서화합니다.',
    },
    {
      icon: BarChart3,
      title: '지표·검증 관점',
      description:
        '전환/이탈 등 핵심 지표를 먼저 정하고, 개선 가설·로그 관점으로 검증 가능한 기획을 지향합니다.',
    },
    {
      icon: Sparkles,
      title: '협업툴·AI 활용',
      description:
        'Figma/Notion 중심으로 커뮤니케이션을 정리하고, 생성형 AI로 리서치 요약·초안·체크리스트를 보완합니다.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            About Me
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full border text-sm">
              Service Planner
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">
              Web Planner
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">
              App Planner
            </span>
            <span className="px-3 py-1 rounded-full border text-sm">UX/IA</span>
          </div>

          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            사용자의 문제를 <span className="font-semibold">리서치로 확인</span>
            하고,
            <span className="font-semibold"> IA·정책·요구사항</span>으로 정리해
            <span className="font-semibold"> 개발 가능한 형태로 합의</span>
            시키는 기획자 정성훈입니다. 협업 툴(Figma/Notion)과 생성형 AI를
            활용해 산출물 품질을 높이고, 프로젝트에서는 팀장 경험을 바탕으로
            커뮤니케이션과 조율을 책임감 있게 수행해왔습니다.
          </p>
        </div>

        {/* 메인 카드: 이미지 패널 | 콘텐츠 패널 */}
        <div
          className={`
            relative overflow-hidden rounded-3xl border bg-card/60 backdrop-blur
            shadow-sm
            transition-all duration-700
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }
          `}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* 좌측: 이미지 패널 */}
            <aside className="relative lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
              <div className="relative p-8 sm:p-10 h-full flex items-center justify-center">
                <div className="relative aspect-square w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[26rem] rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-lg">
                  <Image
                    src="/profile2.jpg"
                    alt="서비스 기획자 정성훈 프로필"
                    fill
                    sizes="(min-width:1280px) 26rem, (min-width:1024px) 20rem, (min-width:768px) 18rem, 14rem"
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </aside>

            {/* 우측: 콘텐츠 패널 */}
            <main className="lg:col-span-3 border-t lg:border-t-0 lg:border-l">
              <div className="p-8 sm:p-10 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    팀이 실행할 수 있는 형태로 정리합니다
                  </h3>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Planning & UX</span>: 문제정의
                    → 리서치 정리 → IA/플로우 → 정책/예외 정의 → PRD/화면정의 →
                    협업/핸드오프까지, 팀이 같은 그림을 보도록 문서와
                    커뮤니케이션을 책임집니다.
                  </p>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Implementation Literacy</span>
                    : 프론트엔드 개발 경험을 바탕으로 API/데이터 흐름, 상태/에러
                    케이스, 구현 난이도까지 고려해 일정과 범위를 현실적으로
                    설계합니다.
                  </p>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Dev Literacy</span>:
                    HTML/CSS/JS·React/Vue·API 연동 이해를 바탕으로 개발
                    난이도·일정·데이터 계약(스키마/에러)까지 고려해{' '}
                    <span className="font-medium">실행 가능한 설계</span>를
                    만듭니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <Card
                      key={i}
                      className="h-full border-muted/60 hover:border-primary/40 transition-colors"
                    >
                      <CardContent className="p-6">
                        <f.icon className="h-7 w-7 text-primary mb-3" />
                        <h4 className="font-semibold mb-2">{f.title}</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          {f.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    단기적으로는{' '}
                    <span className="font-medium">
                      전환/이탈 지표 기반 UX 실험
                    </span>
                    을, 중장기적으로는
                    <span className="font-medium">
                      {' '}
                      조직·데이터·프로세스를 관통하는 서비스 구조
                    </span>
                    를 설계하는 서비스/웹/앱 기획자로 성장하고 있습니다.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2년간 교내 동아리 회장으로 조직 운영과 커뮤니케이션을
                    경험했고, 프로젝트에서는 팀장 역할로 일정/우선순위/의사결정
                    정리를 맡아 팀의 실행 속도를 높이는 방식으로 협업해왔습니다.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-border/60" />
        </div>
      </div>
    </section>
  );
}
