import Image from 'next/image';
export default function Home() {
    return (
        <div className="min-h-screen bg-white" data-oid="11y2v07">
            {/* ナビゲーション */}
            <nav className="fixed w-full z-50 bg-white shadow-md" data-oid="izzr0le">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="ftgnma6"
                >
                    <div className="text-xl font-bold text-gray-800" data-oid="bxg03xs">
                        WEBエンジニア | 堀江 遼佑
                    </div>
                    <div className="space-x-4" data-oid="k7xapy1">
                        <a
                            href="#hero"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="4hpm2lr"
                        >
                            ホーム
                        </a>
                        <a
                            href="#services"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="v3kw._9"
                        >
                            サービス
                        </a>
                        <a
                            href="#portfolio"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="jd5hjm-"
                        >
                            実績
                        </a>
                        <a
                            href="#profile"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="y-3-n50"
                        >
                            プロフィール
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="23hwzw7"
                        >
                            料金
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="ams4jwu"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-20" data-oid="rpa81z2">
                {/* Heroセクション */}
                <section
                    id="hero"
                    className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
                    data-oid="886_-x4"
                >
                    {/* グラデーション背景 */}
                    <div className="absolute inset-0" data-oid="ecxn2n4">
                        <div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 blur-3xl opacity-40 animate-pulse"
                            data-oid="p544g9w"
                        />
                    </div>
                    <div className="relative z-10 text-center px-4" data-oid="t7h4v8l">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            data-oid="4e62zt1"
                        >
                            格闘技ジムの現場を知る
                            <br data-oid=".691jwv" />
                            WEBエンジニアが、
                            <br data-oid="hz8aiab" />
                            伴走型の制作・開発で
                            <br data-oid="b.op2tv" />
                            あなたの道場運営を支えます
                        </h1>
                        <div
                            className="space-y-6 text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
                            data-oid="v3vq471"
                        >
                            <p className="leading-relaxed" data-oid="-3xfyze">
                                ジムオーナーが
                                <span className="font-medium" data-oid="egzg4j8">
                                    本業（トレーニング指導・顧客対応）に集中
                                </span>
                                できるよう、
                                <br className="hidden md:block" data-oid="f.cx:xq" />
                                Webまわりは
                                <span className="text-blue-600" data-oid="hjz6n3z">
                                    すべておまかせください
                                </span>
                            </p>
                            <p className="leading-relaxed" data-oid="6p:o8c_">
                                <span className="font-medium" data-oid="tvw9g:p">
                                    予約管理・会員管理
                                </span>
                                などのシステム導入から、
                                <br className="hidden md:block" data-oid="i8y8rhb" />
                                ホームページの更新、SEO内部施策まで
                                <span className="text-blue-600" data-oid="rbwhyen">
                                    ワンストップでサポート
                                </span>
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors"
                            data-oid="xapotg2"
                        >
                            まずはご相談ください
                        </a>
                    </div>
                </section>

                {/* 課題解決セクション */}
                <section className="py-20 bg-gray-50" data-oid="1.25_y2">
                    <div className="max-w-7xl mx-auto px-6" data-oid="-hgo2ta">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-12"
                            data-oid="ijd_pjj"
                        >
                            こんなお悩み、ありませんか？
                        </h2>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                            data-oid="vik6tyf"
                        >
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="vy8:ghg">
                                <div
                                    className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="emmtplp"
                                >
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="1arhlhl"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            data-oid="b7q94qh"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800" data-oid="iigl0w3">
                                    入会者を増やしたいが、SNSやホームページの運用がうまくいっていない
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="eyb_2j4">
                                <div
                                    className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="4ai835k"
                                >
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":cs-40g"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="ylohx08"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800" data-oid="nf62r2w">
                                    ITのことがよくわからず、トラブル時にどこへ相談したらいいか不安
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-8" data-oid="z74tkyi">
                            <h3
                                className="text-2xl font-bold text-center text-blue-900 mb-8"
                                data-oid="5oon7gp"
                            >
                                私（堀江）が解決します！
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                data-oid="q6hykxy"
                            >
                                <div className="flex items-start space-x-4" data-oid="1ty:jqw">
                                    <div className="flex-shrink-0" data-oid="ti7yw3.">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="onhdbbh"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="es9sxai"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="gm3s.22"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="6k1kv63">
                                        プロの目線でサイトを常にブラッシュアップし、集客を促進
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4" data-oid="r07e.5y">
                                    <div className="flex-shrink-0" data-oid="_z52gj_">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="i9y8563"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="r9shm02"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="zjehq3a"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="zwoc7f3">
                                        小規模ジム・個人事業の現場を知るからこそ、必要最低限のシステム設計でコストを最適化
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4" data-oid="m-gjv.v">
                                    <div className="flex-shrink-0" data-oid="jr5kjok">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="y_rm1qx"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="6-lxz5j"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="ymy1yte"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="0g:57:t">
                                        伴走型サポートで、運用から保守までまるごとお任せください
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* サービスセクション */}
                <section id="services" className="py-20 bg-gray-50" data-oid="f2bbsem">
                    <div className="max-w-7xl mx-auto px-6" data-oid="_f45nl3">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="-a3xj-e"
                        >
                            サービス内容
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="iq_oog8">
                            伴走型の開発体制で、ジム運営を全面サポート。
                            <br data-oid="7xj07:q" />
                            ホームページ制作・リプレイス、予約管理システム、継続的な保守・運用支援を提供します。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="wy1z3vy">
                            {/* ホームページ制作・リプレイス */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="ghq2.4q"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="ct33els"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="fnqapwt"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7h18M3 12h18M3 17h18"
                                            data-oid="4zq5cbt"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="m0q3w49"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-700" data-oid="berj7cd">
                                    オリジナルデザインのホームページ制作や既存ホームページのリプレイスを行います。
                                    <br data-oid="3vx-62o" />
                                    集客力の向上のため、内部SEO対策、MEO対策も実施いたします。
                                </p>
                            </div>
                            {/* 予約・会員管理システム */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="q4qxt7g"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="0c5r7z_"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="29ql4zb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3M16 7V3M4 11h16M4 15h16M4 19h16"
                                            data-oid="-l0k:1a"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="kpabx:5"
                                >
                                    システム開発
                                </h3>
                                <p className="text-gray-700" data-oid="4iz4-8m">
                                    予約管理システムや会員管理システムなど、ジム運営を効率化するシステムを開発いたします。
                                </p>
                            </div>
                            {/* 継続的な保守・運用サポート */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="j7f47bk"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="f5t9mv5"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="b7050lx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="z4evgjw"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="5g14-xs"
                                >
                                    継続的な保守・運用サポート
                                </h3>
                                <p className="text-gray-700" data-oid="rpydez:">
                                    一度作って終わりではなく、伴走型での運用支援により、常に最適な状態を維持いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 実績・事例セクション */}
                <section id="portfolio" className="py-20" data-oid="urc1aty">
                    <div className="max-w-7xl mx-auto px-6" data-oid="fl9g:hk">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="3j0m011"
                        >
                            実績・事例
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="0.nncou">
                            過去のプロジェクトを通じて、道場運営の課題を解決した事例をご紹介
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="crfriix">
                            {/* 事例1 */}
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="rv-klln"
                            >
                                <a
                                    href="https://timetable-hideskick.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    data-oid="z2ss4wl"
                                >
                                    <div
                                        className="aspect-video overflow-hidden"
                                        data-oid=".1s_bmu"
                                    >
                                        <Image
                                            src="/images/hides-timetable.webp"
                                            alt="体験予約受付システム hides timetable"
                                            width={600}
                                            height={400}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                            data-oid="urj53gn"
                                        />
                                    </div>
                                    <div className="p-6" data-oid="g:_89ig">
                                        <h3
                                            className="text-xl font-semibold text-gray-900 mb-2"
                                            data-oid="dxzr5xm"
                                        >
                                            体験予約受付システム
                                            <span
                                                className="text-sm text-gray-500"
                                                data-oid="diuxfo:"
                                            >
                                                Hide&apos;s Kick様
                                            </span>
                                        </h3>
                                        <p className="text-gray-700" data-oid="6wb.fn.">
                                            オンラインでの体験予約受付システムを開発。タイムテーブルに模した予約フォームを実現。
                                        </p>
                                    </div>
                                </a>
                            </div>
                            {/* 事例2 */}
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="3yvtcp7"
                            >
                                <div className="aspect-video overflow-hidden" data-oid="hsa696w">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 600 400"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="e.e.k0_"
                                    >
                                        <rect
                                            width="600"
                                            height="400"
                                            fill="#cccccc"
                                            data-oid="w0.il1k"
                                        />

                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fill="#666666"
                                            fontSize="24"
                                            data-oid="hry._3e"
                                        >
                                            Sample Image
                                        </text>
                                    </svg>
                                </div>
                                <div className="p-6" data-oid="92:s90e">
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="vk6p2zs"
                                    >
                                        ホームページ制作
                                        <span className="text-sm text-gray-500" data-oid="798zbcc">
                                            HK Studio様
                                        </span>
                                    </h3>
                                    <p className="text-gray-700" data-oid="mnm2w5d">
                                        オリジナルデザインのホームページ制作。パーソナルジムの雰囲気を活かしたデザインを実現。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* プロフィールセクション */}
                <section id="profile" className="py-20 bg-gray-50" data-oid="n1z1.3s">
                    <div className="max-w-4xl mx-auto px-6 text-center" data-oid=":rw0w9m">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" data-oid="y45.xr.">
                            プロフィール
                        </h2>
                        <div
                            className="flex flex-col md:flex-row items-center justify-center"
                            data-oid="3p0xhry"
                        >
                            <Image
                                src="/images/my_image.webp"
                                alt="WEBエンジニア 堀江 遼佑のプロフィール画像"
                                width={200}
                                height={200}
                                className="rounded-full mb-6 md:mb-0 md:mr-8"
                                data-oid="zpzaq-i"
                            />

                            <div className="text-left" data-oid="0mfz5z5">
                                <p
                                    className="text-xl text-gray-900 font-semibold"
                                    data-oid="rxa4r5h"
                                >
                                    WEBエンジニア × 格闘技ジムスタッフ
                                </p>
                                <p className="text-gray-700 mt-4" data-oid="ja9v77e">
                                    WEBエンジニアとしての開発経験、さらに格闘技ジムでの現場経験を活かし、ITが苦手な小規模ジムや個人事業オーナーに寄り添ったサポートを提供しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 料金・プランセクション */}
                <section id="pricing" className="py-20 bg-gray-50" data-oid="01pss6y">
                    <div className="max-w-5xl mx-auto px-6" data-oid="-iva2r4">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="qn8.zuv"
                        >
                            料金・プラン
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="6jppn5z">
                            ニーズに合わせてご相談させていただきます。以下は目安となります。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="zoqo.s2">
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid=".c__u_k">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="hh5zi.h"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="qaab_wy">
                                    初期費用：¥30,000～
                                </p>
                                <p className="text-gray-700" data-oid="wri4pnu">
                                    内部SEO対策とMEO対策を実施し、集客力の向上をサポートします。
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="tn4tnch">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="924-i12"
                                >
                                    システム開発
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="_2vcw9o">
                                    初期費用：¥100,000～
                                </p>
                                <p className="text-gray-700" data-oid="x1doer5">
                                    ご要望に合わせたシステムをスクラッチ開発いたします。プロジェクト規模に合わせて柔軟にお見積りいたします。
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 text-center" data-oid="lr_jqmc">
                            <p className="text-gray-700" data-oid=":q9xstb">
                                【導入の流れ】 ヒアリング → 要件定義 → デザイン・開発 → 納品 →
                                運用・継続サポート
                            </p>
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section id="contact" className="py-20 bg-gray-100" data-oid="nd-f15i">
                    <div className="max-w-3xl mx-auto px-6" data-oid="kc1e8zi">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="t6jvajs"
                        >
                            お問い合わせ
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="fc:q65k">
                            お気軽にご連絡ください。ご相談内容に合わせた最適なご提案をいたします。
                        </p>
                        <form className="space-y-6" data-oid="wda2pij">
                            <div data-oid="3-0vmu-">
                                <label className="block text-gray-800 mb-2" data-oid="f9vtgc3">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="山田 太郎"
                                    data-oid="avkl:vk"
                                />
                            </div>
                            <div data-oid="jq9p2c7">
                                <label className="block text-gray-800 mb-2" data-oid="nr61uf0">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="your@email.com"
                                    data-oid="vc6j2zz"
                                />
                            </div>
                            <div data-oid="oq.qq56">
                                <label className="block text-gray-800 mb-2" data-oid="vdbum3r">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="ご相談内容をご記入ください"
                                    data-oid="t2mqin1"
                                />
                            </div>
                            <div className="text-center pt-4" data-oid="27q6:jh">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                                    data-oid="n:3p_k6"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* フッター */}
            <footer className="bg-gray-200 text-gray-700 py-8" data-oid="bvsx5u0">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="4e0p_hl">
                    <p data-oid="twq14c6">© 2025 ryosuke horie . All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
