'use client';

import React from 'react';
import Modal from './Modal';
import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  CheckCircle2,
  Flag,
  Lightbulb,
  Layout,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';

type RoleBlock = {
  label: string;
  bullets: string[];
  tags?: string[];
  icon?: LucideIcon; // ✅ 여기 변경 (기존 ComponentType<SVGProps<...>> 제거)
};

export type ProjectRoleData = {
  title: string;
  period?: string;
  summary?: string;

  problem?: string;
  criteria?: string[];
  decisions?: string[];
  validation?: string[];

  roles: RoleBlock[];
};

type RoleModalProps = {
  open: boolean;
  onClose: () => void;
  data: ProjectRoleData | null;
};

// ✅ fallback 아이콘 배열을 정식 타입으로
const FALLBACK_ICONS: LucideIcon[] = [Layout, ClipboardList];

export default function RoleModal({ open, onClose, data }: RoleModalProps) {
  if (!data) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={data.title}
      subtitle={[data.period, data.summary].filter(Boolean).join(' · ')}
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6">
        {(data.problem ||
          data.criteria?.length ||
          data.decisions?.length ||
          data.validation?.length) && (
          <div className="grid grid-cols-1 gap-4">
            {data.problem && (
              <div className="rounded-xl border bg-background/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <AlertCircle className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-semibold">Problem</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.problem}
                </p>
              </div>
            )}

            {data.criteria?.length ? (
              <div className="rounded-xl border bg-background/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Flag className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-semibold">Criteria</h4>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {data.criteria.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {data.decisions?.length ? (
              <div className="rounded-xl border bg-background/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-semibold">Key Decisions</h4>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {data.decisions.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {data.validation?.length ? (
              <div className="rounded-xl border bg-background/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-semibold">Validation</h4>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {data.validation.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}

        <div className="space-y-4">
          {data.roles.map((r, idx) => {
            const Icon: LucideIcon =
              r.icon ?? FALLBACK_ICONS[idx % FALLBACK_ICONS.length];

            return (
              <div key={idx} className="rounded-xl border bg-background/70 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="font-semibold">{r.label}</h4>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {r.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="bg-background/70"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
