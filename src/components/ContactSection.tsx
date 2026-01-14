'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Copy } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    );
    const el = document.getElementById('contact');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      value: 'hooni7007@naver.com',
      href: 'mailto:hooni7007@naver.com',
      copy: 'hooni7007@naver.com',
    },
    {
      icon: Phone,
      title: '전화번호',
      value: '+82 10-6640-8967',
      href: 'tel:+821066408967',
      copy: '+821066408967',
    },
    {
      icon: MapPin,
      title: '위치',
      value: '수지, 대한민국',
      href: '#',
      copy: '수지, 대한민국',
    },
  ];

  const socialLinks = [
    { icon: Github, title: 'GitHub', href: 'https://github.com/seonghoon1201' },
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Copied:', text);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/70" />
            Get in touch
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Contact
          </h2>
          <p className="mt-3 text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            기획 협업·채용·프로젝트 문의는 언제든 편하게 연락 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card
            className={`border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-center justify-between rounded-xl border bg-background/60 p-4 hover:bg-background transition"
                  >
                    <a
                      href={info.href}
                      className="flex items-center gap-3 min-w-0"
                      aria-label={info.title}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">
                          {info.title}
                        </div>
                        <div className="truncate font-medium">{info.value}</div>
                      </div>
                    </a>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0"
                      onClick={() => handleCopy(info.copy)}
                      aria-label={`${info.title} 복사`}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="mb-3 text-sm font-medium text-foreground/80">
                  소셜
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <Button key={s.title} variant="outline" asChild>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <s.icon className="h-4 w-4" />
                        {s.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`relative border bg-card/70 backdrop-blur transition-all duration-700 hover:shadow-lg ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">메시지 보내기</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-5"
                action="mailto:hooni7007@naver.com"
                method="get"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="peer w-full rounded-lg border bg-background/60 px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                      placeholder=" "
                      aria-label="이름"
                    />
                    <label
                      htmlFor="name"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 px-1 text-sm text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
                    >
                      이름
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer w-full rounded-lg border bg-background/60 px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                      placeholder=" "
                      aria-label="이메일"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 px-1 text-sm text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
                    >
                      이메일
                    </label>
                  </div>
                </div>
                <div className="group relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="peer w-full rounded-lg border bg-background/60 px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    placeholder=" "
                    aria-label="제목"
                  />
                  <label
                    htmlFor="subject"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 px-1 text-sm text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
                  >
                    제목
                  </label>
                </div>
                <div className="group relative">
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    className="peer w-full resize-none rounded-lg border bg-background/60 px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                    placeholder=" "
                    aria-label="메시지"
                  />
                  <label
                    htmlFor="body"
                    className="pointer-events-none absolute left-3 top-3 bg-background/80 px-1 text-sm text-muted-foreground transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    메시지
                  </label>
                </div>
                <Button className="w-full" asChild>
                  <a
                    href="mailto:hooni7007@naver.com?subject=%EA%B8%B0%ED%9A%8D%20%EB%AC%B8%EC%9D%98&body=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20%EC%A0%95%EC%84%B1%ED%9B%88%EB%8B%98!"
                    aria-label="메일 보내기"
                  >
                    메시지 보내기
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  제출 클릭 시 기본 메일 앱이 열립니다. 서버 저장은 하지
                  않습니다.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
