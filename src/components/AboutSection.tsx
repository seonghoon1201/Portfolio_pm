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
      title: '문제정의 & 가설수립',
      description:
        '리서치 인사이트로 핵심 문제를 요약하고 검증 가능한 가설·지표를 세웁니다.',
    },
    {
      icon: Users,
      title: '사용자 리서치',
      description:
        '인터뷰·페르소나·저니맵으로 과업을 분석하고 요구사항을 구조화합니다.',
    },
    {
      icon: ListChecks,
      title: 'IA·플로우·정책',
      description:
        'IA/플로우/정책서·화면정의서로 개발 가능한 수준의 명세를 만듭니다.',
    },
    {
      icon: ClipboardList,
      title: 'PRD/요구사항 정의',
      description: '범위·우선순위·예외케이스를 담은 PRD로 팀 합의를 이끕니다.',
    },
    {
      icon: BarChart3,
      title: '지표 설계·검증',
      description: '전환/이탈/탐색 지표와 A/B 실험으로 개선 효과를 검증합니다.',
    },
    {
      icon: Sparkles,
      title: '개발 커뮤니케이션',
      description:
        'API 계약·데이터 매핑·오류 시나리오까지 엔드투엔드로 핸드오프합니다.',
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
            사용자의 문제를 구조적으로 해석해{' '}
            <span className="font-semibold">
              서비스 기획 → UX 설계 → 개발 핸드오프
            </span>
            까지 연결하는{' '}
            <span className="font-semibold">개발 가능한 기획자</span>{' '}
            정성훈입니다. 구현 관점에서 타협하지 않는 기획, 데이터를 통해 배우는
            기획을 지향합니다.
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
                    기획 ↔ 개발, 엔드투엔드로 잇습니다
                  </h3>

                  <p className="text-muted-foreground text-pretty">
                    <span className="font-medium">Planning & UX</span>: 문제정의
                    → 리서치 → IA/플로우 → 와이어/프로토 → PRD → 구현 핸드오프 →
                    데이터 기반 개선의{' '}
                    <span className="font-medium">E2E 사이클</span>을
                    주도합니다. 예외·정책·권한을 빠짐없이 정의하고, 팀이 같은
                    그림을 보도록 문서화합니다.
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
