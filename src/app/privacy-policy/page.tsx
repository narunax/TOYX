"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { LAYOUT_PX } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <main className={`min-h-screen pt-32 pb-20 ${LAYOUT_PX}`}>
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-8 block">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-extralight text-navy-900 mb-16 leading-tight">
            プライバシーポリシー
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-slate font-light leading-relaxed max-w-none space-y-12">
            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                1. 個人情報の収集について
              </h2>
              <p>
                TOYX（以下「当サイト」）では、お問い合わせやサービスのお申し込み時に、
                氏名・メールアドレス等の個人情報をご登録いただく場合がございます。
                これらの個人情報は、質問に対する回答や必要な情報を電子メールなどで
                ご連絡する場合に利用させていただくものであり、
                個人情報をご提供いただく際の目的以外では利用いたしません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                2. 個人情報の第三者への開示
              </h2>
              <p>
                当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて
                第三者に開示することはありません。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-rose-300">
                <li>本人のご了解がある場合</li>
                <li>法令等への協力のため、開示が必要となる場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                3. 個人情報の開示・訂正・追加・削除・利用停止
              </h2>
              <p>
                ご本人からの個人データの開示・訂正・追加・削除・利用停止の
                ご希望の場合には、ご本人であることを確認させていただいた上、
                速やかに対応させていただきます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                4. アクセス解析ツールについて
              </h2>
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を
                利用する可能性があります。このGoogleアナリティクスはトラフィックデータの
                収集のためにCookieを使用しています。
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                この機能はCookieを無効にすることで収集を拒否することが出来ますので、
                お使いのブラウザの設定をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                5. 免責事項
              </h2>
              <p>
                当サイトからリンクやバナーなどによって他のサイトに移動された場合、
                移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう
                努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
                当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので
                ご了承ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-navy-900 mb-6 tracking-wide">
                6. 運営者情報
              </h2>
              <div className="bg-navy-50/50 p-8 rounded-sm backdrop-blur-sm border border-navy-100">
                <dl className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:gap-8">
                    <dt className="w-24 font-normal text-navy-800">屋号</dt>
                    <dd>TOYX（トイズ）</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-8">
                    <dt className="w-24 font-normal text-navy-800">代表</dt>
                    <dd>稲葉 成人（Naruhito Inaba）</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-8">
                    <dt className="w-24 font-normal text-navy-800">お問い合わせ</dt>
                    <dd>
                      <Link href="/contact" className="text-rose-500 hover:text-rose-600 transition-colors border-b border-rose-200 hover:border-rose-600">
                        お問い合わせフォーム
                      </Link>
                      <span className="mx-2">または</span>
                      SNSのDMよりお願いいたします。
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <div className="border-t border-navy-100 pt-12 mt-20 text-center">
              <Link href="/" className="inline-block text-sm font-light tracking-widest text-slate-500 hover:text-navy-900 transition-colors">
                ← HOMEに戻る
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
