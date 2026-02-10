'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, UserSquare2, Trophy } from 'lucide-react';
import Image from 'next/image';
import RoleModal, { ProjectRoleData } from '@/components/RoleModal';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  readme: string;

  // ✅ 기존 status 대신 award 추천 (이름도 더 의미 명확)
  award?: string;

  roleData: ProjectRoleData;
};

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectRoleData | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      {
        threshold: 0.12,
      },
    );
    const el = document.getElementById('projects');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const projects: Project[] = [
    
    {
      title: 'Hiking Planner – 등산 도우미 앱',
      award: '캡스톤 대상',
      description:
        '조난/이탈 상황에서 “빠르게 도움 요청”이 가능한 흐름을 목표로 SOS·트래킹·신고 플로우를 설계했습니다. 현장 사용성을 기준으로 조작 단계를 최소화했습니다.',
      image: '/Hiking_Planner_logo.png',
      technologies: [
        'User Interview',
        'Journey Map',
        'Wireframe',
        'SOS UX',
        'RN(협업)',
      ],
      github: 'https://github.com/Hiking-Planner',
      readme:
        'https://github.com/Hiking-Planner/.github/blob/main/profile/README.md',
      roleData: {
        title: 'Hiking Planner',
        period: '2024.02 – 2024.11',
        summary: '아이디어·UX 총괄 · 팀 리드',
        problem:
          '등산 중 길 이탈/조난 상황에서 위치 공유와 구조 요청이 복잡해 “골든타임”을 놓칠 수 있다.',
        criteria: [
          'SOS는 최소 터치로 접근 가능해야 함',
          '권한/오프라인/저전력 등 예외에서 UX가 무너지지 않아야 함',
        ],
        decisions: [
          'SOS 진입 단계를 단순화(확인 최소화)',
          '권한/네트워크/저전력 예외 플로우를 별도 정책으로 정의',
        ],
        validation: [
          '사용자 피드백 기반으로 플로우/문구 개선',
          '캡스톤에서 결과로 성과를 인정받음(대상)',
        ],
        roles: [
          {
            label: '리서치',
            bullets: [
              '사전 인터뷰 및 위험 시나리오 정리',
              '경쟁 서비스 벤치마크 및 차별점 정의',
            ],
            tags: ['Research'],
          },
          {
            label: 'UX 설계',
            bullets: [
              'SOS 원터치 중심 플로우',
              '트래킹/신고/날씨 핵심 여정 설계',
            ],
            tags: ['Flow', 'Wireframe'],
          },
          {
            label: '정책/예외',
            bullets: [
              '권한/네트워크/배터리 예외 정책',
              '오류 상태 UX(오프라인/저전력)',
            ],
            tags: ['Policy'],
          },
        ],
      },
    },
    {
      title: 'ZIBI – 주택 청약 도우미 앱',
      award: '우수 프로젝트 선정',
      description:
        '복잡한 청약 정보를 “단계형 질문 플로우”로 재구성해 진입장벽을 낮춘 도우미 웹앱. 초심자도 이해 가능한 흐름을 기준으로 IA·정책·화면을 정리했습니다.',
      image: '/zibi_logo.png',
      technologies: [
        'Figma',
        'Miro',
        'PRD',
        'IA/Flow',
        'Kakao Map',
        'Vue(협업)',
      ],
      github: 'https://github.com/PJT-16-3',
      readme: 'https://github.com/PJT-16-3/.github/blob/main/profile/README.md',
      roleData: {
        title: 'ZIBI (청약 도우미)',
        period: '2025.07 – 2025.08',
        summary: '팀장 · 서비스 기획 · UX/IA · FE 협업',
        problem:
          '청약 정보가 복잡하고 용어가 난해해, 사용자가 “가점 확인/추천 탐색”까지 도달하기 전에 이탈한다.',
        criteria: [
          '초심자가 이해 가능한 단계형 질문 플로우',
          '핵심 정보는 요약→상세로 탐색 가능해야 함',
          '예외/빈결과/권한 등 상태 정책이 먼저 정의되어야 함',
        ],
        decisions: [
          '가점 계산을 다단계 질문 플로우로 설계(복잡도를 단계로 분산)',
          '추천/상세 페이지는 “요약 우선” 구조로 정보 우선순위 재배치',
          '공통 컴포넌트/상태명 규칙을 먼저 합의해 화면 일관성 확보',
        ],
        validation: [
          '팀 내 사용자 관점 피드백을 반영해 플로우/문구/상태 처리를 개선',
          '부트캠프 내 우수 프로젝트로 선정',
        ],
        roles: [
          {
            label: '문제정의 & 범위/우선순위',
            bullets: [
              '정보 과잉/용어 난해성 문제 정의',
              '핵심 플로우(MVP) 범위와 후순위 기능을 분리',
            ],
            tags: ['Problem Framing', 'MVP'],
          },
          {
            label: 'IA/플로우/정책',
            bullets: [
              '선호 설정 → 가점 계산 → 추천 탐색 IA/플로우 설계',
              '예외/빈 결과/로딩/오류 상태 정책을 화면 기준으로 정리',
            ],
            tags: ['IA', 'Policy'],
          },
          {
            label: '핸드오프 & 협업',
            bullets: [
              '화면-데이터 매핑 정리 및 협업 커뮤니케이션',
              '변경사항/결정사항을 문서로 기록해 팀 정렬 유지',
            ],
            tags: ['Handoff', 'Docs'],
          },
          {
            label: '지표/검증 관점(설계)',
            bullets: [
              '진입→계산→추천→상세까지의 핵심 전환 지점을 정의',
              '개선 가설을 세우고 “무엇을 보면 성공인지” 기준을 문서로 정리',
            ],
            tags: ['Metrics (Design)', 'Hypothesis'],
          },
        ],
      },
    },
    {
      title: 'Yeodam – 여행 계획 도우미 앱',
      description:
        '여행 조건 입력 → 자동 일정 생성 → 편집/확정까지 이어지는 여행 계획 웹앱. 지도/일정 동기화 기반의 편집 UX를 중심으로 설계했습니다.',
      image: '/yeodam.png',
      technologies: [
        'Storyboarding',
        'IA/Flow',
        'Tour API',
        'Schedule Editing',
        'React(협업)',
      ],
      github: 'https://github.com/YeoDamHuman',
      readme:
        'https://github.com/YeoDamHuman/.github/blob/main/profile/README.md',
      roleData: {
        title: '여담 (여행 계획 앱)',
        period: '2025.05 – 2025.09',
        summary: '서비스 기획 · UX Writing · API 와이어업',
        problem:
          '여행 준비에서 동선/일정 구성 부담이 커서 계획을 끝까지 완성하기 어렵다.',
        criteria: [
          '입력 흐름은 단계형으로 단순해야 함',
          '생성 결과는 “편집 가능한 형태”로 제공되어야 함',
        ],
        decisions: [
          '위치→날짜→스타일→예산→초대 단계형 플로우',
          '일정 결과는 Day별 카드 + 지도 + 편집 동선으로 고정',
        ],
        validation: ['사용 흐름 기반으로 에러/빈 결과 UX를 보완해 안정성 개선'],
        roles: [
          {
            label: 'IA/플로우',
            bullets: [
              '단계형 입력 플로우 설계',
              '장바구니/추천/필터 상호작용 정의',
            ],
            tags: ['IA', 'Flow'],
          },
          {
            label: 'API 와이어업',
            bullets: [
              'Tour API 스펙 검토 및 Fallback 정책',
              '에러/빈 결과 UX 문구/상태 정의',
            ],
            tags: ['API', 'UX Writing'],
          },
          {
            label: 'AI 활용(초안 보조)',
            bullets: [
              '생성형 AI를 리서치 요약/문구 초안/체크리스트 보조로 활용',
            ],
            tags: ['GenAI (Assist)'],
          },
        ],
      },
    },
    {
      title: 'DKUAC – 교내 동아리 산악부 홈페이지',
      description:
        '장비 대여/활동 기록을 온라인으로 전환한 운영 시스템. 역할/권한과 운영 프로세스를 기준으로 정보 구조를 정리했습니다.',
      image: '/DKUAC_logo.png',
      technologies: [
        'Requirement',
        'Role/Permission',
        'Process',
        'Dashboard',
        'React(협업)',
      ],
      github: 'https://github.com/DKUAC',
      readme: 'https://github.com/DKUAC/.github/blob/main/profile/README.md',
      roleData: {
        title: 'DKUAC 동아리 홈페이지',
        period: '2024.07 – 2024.12',
        summary: '서비스 설계 · 운영 정책 · 유지보수',
        problem:
          '수기/메신저 기반 대여/반납 관리로 기록 누락과 혼선이 발생한다.',
        criteria: [
          '대여 상태가 한눈에 보여야 함',
          '누가/언제/무엇을 대여했는지 기록이 남아야 함',
        ],
        decisions: [
          '대여 상태 배지/필터 중심 UI',
          '권한/역할과 운영 정책(패널티/알림) 정리',
        ],
        validation: [
          '운영 이슈 반영 유지보수로 혼선 감소',
          '온보딩/운영 매뉴얼 문서화',
        ],
        roles: [
          {
            label: '요구사항 정리',
            bullets: ['운영 Pain Point 정리', '우선순위 및 릴리즈 플랜 수립'],
            tags: ['Requirement'],
          },
          {
            label: '프로세스/정책',
            bullets: ['대여·반납 정책/패널티/알림', '권한/역할 설계'],
            tags: ['Policy', 'R&R'],
          },
          {
            label: '운영/문서화',
            bullets: [
              '운영 매뉴얼/온보딩 문서화',
              '반복 이슈를 기준/프로세스로 정리',
            ],
            tags: ['Ops', 'Docs'],
          },
        ],
      },
    },
  ];

  const onOpenRole = (data: ProjectRoleData) => {
    setSelected(data);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Case Studies
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            문제정의 → IA/정책 → 산출물 정리 → 협업/핸드오프까지
            <br />
            팀이 실행할 수 있는 형태로 정리한 프로젝트들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Card
              key={p.title}
              className={`group overflow-hidden border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <button
                type="button"
                onClick={() => onOpenRole(p.roleData)}
                className="relative w-full text-left"
                aria-label={`${p.title} 역할 보기`}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />
                  {p.award && (
                    <div className="absolute left-3 top-3 z-10">
                      <span
                        className="
        inline-flex items-center gap-1.5
        rounded-full
        px-3 py-1.5
        text-xs font-semibold
        text-primary-foreground
        bg-gradient-to-r from-primary to-primary/80
        shadow-md shadow-primary/20
        ring-1 ring-black/5
        backdrop-blur
      "
                      >
                        <Trophy className="h-3.5 w-3.5" />
                        {p.award}
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {p.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="bg-background/70"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => onOpenRole(p.roleData)}
                    aria-label={`${p.title} 역할/기여 열기`}
                  >
                    <UserSquare2 className="mr-2 h-4 w-4" />
                    역할
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <RoleModal open={open} onClose={() => setOpen(false)} data={selected} />
    </section>
  );
}
