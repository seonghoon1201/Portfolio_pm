'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip } from 'antd';
import { Wrench, Boxes, Code2, CheckCircle2, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 },
    );
    const el = document.getElementById('skills');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const planningCore = [
    '문제 정의 및 가설 수립',
    'IA 설계 / 유저 플로우 설계',
    '와이어프레임 / 프로토타입 기획',
    'PRD·정책 설계 / 예외 케이스 정의',
  ];

  const researchAnalytics = [
    '인터뷰 / 설문 설계 및 정리',
    '고객 여정맵 / JTBD 구조화',
    '핵심 지표(전환/이탈) 정의 및 가설 수립',
    '로그/이벤트 관점으로 “무엇을 보면 성공인지” 기준 정리',
  ];

const libraries = [
  'Figma',
  'FigJam',
  'Notion',
  'Google Sheets / Excel',
  'Postman',
  'Swagger',
];
  const devLiteracy = [
    'HTML / CSS / JS 이해',
    'React',
    'Vue',
    'REST API 이해',
    'Git / GitHub 협업',
  ];

  const aiCollaboration = [
    'Figma / FigJam로 화면·플로우 협의',
    'Notion으로 PRD·회의록·결정사항 기록',
    '생성형 AI로 리서치 요약/초안/체크리스트 보완',
    'Slack/GitHub로 이슈 공유 및 변경 이력 관리',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Skill Matrix
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Skills
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            기획 중심 역량을 전면에 두고, 구현 이해도를 함께 보유하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Planning Core */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Boxes className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Planning & UX Core
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent className="space-y-2">
              {planningCore.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 rounded-lg border px-3 py-2 bg-background/60"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Research & Analytics */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Research & Data
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {researchAnalytics.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 rounded-lg border px-3 py-2 bg-background/60"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((lib, idx) => (
                    <Tooltip title={lib} key={idx}>
                      <span className="px-3 py-1 text-sm rounded-md border bg-background/70 hover:bg-background transition">
                        {lib}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dev Literacy */}
          <Card
            className={`group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  Dev Literacy
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {devLiteracy.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md border bg-background/70 hover:bg-background transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* AI & Collaboration */}
          <Card className="group h-full border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle className="text-center text-xl">
                  AI & Collaboration
                </CardTitle>
              </div>
              <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </CardHeader>
            <CardContent className="space-y-2">
              {aiCollaboration.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 rounded-lg border px-3 py-2 bg-background/60"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
