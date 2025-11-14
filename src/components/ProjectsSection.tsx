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
import { Github, UserSquare2 } from 'lucide-react';
import Image from 'next/image';
import RoleModal, { ProjectRoleData } from '@/components/RoleModal';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  readme: string;
  status?: string;
  roleData: ProjectRoleData;
};

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectRoleData | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    );
    const el = document.getElementById('projects');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'ZIBI – 청약 지비',
      description:
        '복잡한 청약 정보를 단계형 UX로 단순화한 주택청약 도우미 웹앱. 신규/기존 사용자 모두의 진입장벽을 낮추는 흐름을 설계했습니다.',
      image: '/zibi_logo.png',
      technologies: [
        'Figma',
        'Miro',
        'PRD',
        'IA/Flow',
        'Kakao Map',
        'Vue(협업 소통)',
      ],
      github: 'https://github.com/PJT-16-3',
      readme: 'https://github.com/PJT-16-3/.github/blob/main/profile/README.md',
      roleData: {
        title: 'ZIBI (청약 도우미)',
        period: '2025.07 – 2025.08',
        summary: '팀장 · 서비스 기획 · UX 설계 · FE 협업',
        roles: [
          {
            label: '문제정의 & 전략',
            bullets: [
              '청약 정보 과잉/용어 난해성 문제 정의',
              '신규/기존 사용자 시나리오 분기 및 KPI 설정',
            ],
            tags: ['Problem Framing', 'KPI'],
          },
          {
            label: 'IA/플로우/정책',
            bullets: [
              '선호 설정 → 가점 계산 → 추천 흐름 IA/플로우',
              '예외/권한/정책서 및 데이터 매핑 명세',
            ],
            tags: ['IA', 'Policy'],
          },
          {
            label: '핸드오프 & 협업',
            bullets: [
              'API 계약서/스키마 정의, 화면-데이터 매핑',
              '컴포넌트 규칙·상태명 규칙 합의',
            ],
            tags: ['Handoff', 'API Contract'],
          },
          {
            label: '지표/검증',
            bullets: [
              '진입→계산→상세 전환 지표 설계',
              'A/B 실험안 도출 및 로그 설계',
            ],
            tags: ['Metrics', 'Experiment'],
          },
        ],
      },
    },
    {
      title: 'Hiking Planner – 등산 안전 앱',
      description:
        '조난/이탈 상황에서 빠른 구조를 돕는 안전 중심 앱. SOS 1-탭 구조와 경로 최소화를 목표로 설계했습니다.',
      image: '/Hiking_Planner_logo.png',
      technologies: [
        'User Interview',
        'Journey Map',
        'Wireframe',
        'SOS UX',
        'RN(협업 소통)',
      ],
      github: 'https://github.com/Hiking-Planner',
      readme:
        'https://github.com/Hiking-Planner/.github/blob/main/profile/README.md',
      roleData: {
        title: 'Hiking Planner',
        period: '2024.02 – 2024.11',
        summary: '아이디어·UX 총괄 · 팀 리드',
        roles: [
          {
            label: '리서치',
            bullets: [
              '사전 인터뷰/리스크 맵 작성',
              '경쟁 서비스 벤치마크 및 차별점 정의',
            ],
            tags: ['Research'],
          },
          {
            label: 'UX 설계',
            bullets: [
              'SOS 원터치/확인 최소화 플로우',
              '트래킹·신고·날씨 핵심 사용자 여정',
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
          {
            label: '지표',
            bullets: ['핵심 경로 과업 완료율', '이탈 포인트 개선 가설 수립'],
            tags: ['Metrics'],
          },
        ],
      },
    },
    {
      title: 'Yeodam – 여행 계획 플랫폼',
      description:
        '여행 목적·예산·취향 기반으로 자동 일정을 생성하고 편집하는 웹앱. 지도/일정 동기화 중심의 편집 UX를 설계했습니다.',
      image: '/yeodam.png',
      technologies: [
        'Storyboarding',
        'IA/Flow',
        'Tour API',
        'Schedule Editing',
        'React(협업 소통)',
      ],
      github: 'https://github.com/YeoDamHuman',
      readme:
        'https://github.com/YeoDamHuman/.github/blob/main/profile/README.md',
      roleData: {
        title: '여담 (여행 계획 앱)',
        period: '2025.05 – 2025.09',
        summary: '서비스 기획 · UX Writing · API 와이어업',
        roles: [
          {
            label: '핵심 가치',
            bullets: [
              '준비과정 자동화(입력→계획)',
              '지도/일정 동기화 편집 경험',
            ],
            tags: ['Value Prop'],
          },
          {
            label: 'IA/플로우',
            bullets: [
              '위치→날짜→스타일→예산→초대 단계 설계',
              '장바구니/추천/필터 상호작용 정의',
            ],
            tags: ['IA', 'Flow'],
          },
          {
            label: 'API와이어업',
            bullets: ['Tour API 스펙 검토 및 Fallback 정책', '에러/빈 결과 UX'],
            tags: ['API', 'UX Writing'],
          },
        ],
      },
    },
    {
      title: 'DKUAC – 산악부 홈페이지',
      description:
        '장비 대여/활동 기록을 온라인으로 전환한 운영 시스템. 역할/권한과 프로세스를 기준으로 정보 구조를 설계했습니다.',
      image: '/DKUAC_logo.png',
      technologies: [
        'Requirement',
        'Role/Permission',
        'Process',
        'Dashboard',
        'React(협업 소통)',
      ],
      github: 'https://github.com/DKUAC',
      readme: 'https://github.com/DKUAC/.github/blob/main/profile/README.md',
      roleData: {
        title: 'DKUAC 동아리 홈페이지',
        period: '2024.07 – 2024.12',
        summary: '서비스 설계 · 운영 정책 · 유지보수',
        roles: [
          {
            label: '요구사항 정리',
            bullets: [
              '운영 Pain Point 인터뷰/정리',
              '우선순위 및 릴리즈 플랜 수립',
            ],
            tags: ['Requirement'],
          },
          {
            label: '프로세스/정책',
            bullets: ['대여·반납 정책/패널티/알림', '권한/역할 설계'],
            tags: ['Policy', 'R&R'],
          },
          {
            label: '운영/지표',
            bullets: [
              '대여율/미반납/활동량 간이 대시보드',
              '운영 매뉴얼/온보딩 문서화',
            ],
            tags: ['Ops', 'Dashboard'],
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
            제가 <strong>기획하고 팀과 함께 만든</strong> 주요 작업을
            소개합니다. (모든 개발·협업 맥락은 역할 모달에서 확인하세요.)
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
