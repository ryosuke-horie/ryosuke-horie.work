import Image from 'next/image';
export default function Home() {
    return (
        <div className="min-h-screen bg-white" data-oid="y_g:5hb">
            {/* ナビゲーション */}
            <nav className="fixed w-full z-50 bg-white shadow-md" data-oid="awd6rao">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="fw:6tku"
                >
                    <div className="text-xl font-bold text-gray-800" data-oid="1gvvhlp">
                        WEBエンジニア | 堀江 遼佑
                    </div>
                    <div className="space-x-4" data-oid="ch-3.mc">
                        <a
                            href="#hero"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="zszxa0c"
                        >
                            ホーム
                        </a>
                        <a
                            href="#services"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid=".ltdesk"
                        >
                            サービス
                        </a>
                        <a
                            href="#portfolio"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="t3v4xy7"
                        >
                            実績
                        </a>
                        <a
                            href="#profile"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="uuzqg5m"
                        >
                            プロフィール
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="8j1_-0r"
                        >
                            料金
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="rcnx4i9"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-20" data-oid="emz8e22">
                {/* Heroセクション */}
                <section
                    id="hero"
                    className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
                    data-oid="kv9vss1"
                >
                    {/* グラデーション背景 */}
                    <div className="absolute inset-0" data-oid="gizr37q">
                        <div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 blur-3xl opacity-40 animate-pulse"
                            data-oid="yq61ib6"
                        />
                    </div>
                    <div className="relative z-10 text-center px-4" data-oid="l931zc2">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            data-oid="nn7pikd"
                        >
                            格闘技ジムの現場を知る
                            <br data-oid="_:pabnv" />
                            WEBエンジニアが、
                            <br data-oid="6so6unh" />
                            伴走型の制作・開発で
                            <br data-oid="5roq35:" />
                            あなたの道場運営を支えます
                        </h1>
                        <div
                            className="space-y-6 text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
                            data-oid="7-a9zi-"
                        >
                            <p className="leading-relaxed" data-oid="ri8bv.4">
                                ジムオーナーが
                                <span className="font-medium" data-oid="uj.u8--">
                                    本業（トレーニング指導・顧客対応）に集中
                                </span>
                                できるよう、
                                <br className="hidden md:block" data-oid="sdosgh3" />
                                Webまわりは
                                <span className="text-blue-600" data-oid="nqavp3m">
                                    すべておまかせください
                                </span>
                            </p>
                            <p className="leading-relaxed" data-oid="ltihe3u">
                                <span className="font-medium" data-oid="7ui2n_y">
                                    予約管理・会員管理
                                </span>
                                などのシステム導入から、
                                <br className="hidden md:block" data-oid="gvjbhxa" />
                                ホームページの更新、SEO内部施策まで
                                <span className="text-blue-600" data-oid="p4bv9kf">
                                    ワンストップでサポート
                                </span>
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors"
                            data-oid="hxbddv:"
                        >
                            まずはご相談ください
                        </a>
                    </div>
                </section>

                {/* 課題解決セクション */}
                <section className="py-20 bg-gray-50" data-oid="hzi578q">
                    <div className="max-w-7xl mx-auto px-6" data-oid="6mfzlm7">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-12"
                            data-oid="wegrtrt"
                        >
                            こんなお悩み、ありませんか？
                        </h2>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                            data-oid="pj:4ghn"
                        >
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="jxbol:6">
                                <div
                                    className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="0so-rz-"
                                >
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="796mjr4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            data-oid="fgg101_"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800" data-oid="t_sm_1l">
                                    入会者を増やしたいが、SNSやホームページの運用がうまくいっていない
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="w2t9nxq">
                                <div
                                    className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="k6lunya"
                                >
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="8pun.:d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="5:kzyq4"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800" data-oid="471d.a9">
                                    ITのことがよくわからず、トラブル時にどこへ相談したらいいか不安
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-8" data-oid="q55op2f">
                            <h3
                                className="text-2xl font-bold text-center text-blue-900 mb-8"
                                data-oid="sa0e0sy"
                            >
                                私（堀江）が解決します！
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                data-oid="ub:d_vo"
                            >
                                <div className="flex items-start space-x-4" data-oid="xnwpi19">
                                    <div className="flex-shrink-0" data-oid="fwtoyx3">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="av9wgdl"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="liylmw3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid=".dd3y0."
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="mbxizy6">
                                        プロの目線でサイトを常にブラッシュアップし、集客を促進
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4" data-oid="-_okuua">
                                    <div className="flex-shrink-0" data-oid="fodm43n">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="215ieed"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="rr4-g1_"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="732qx4k"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="ywbu34z">
                                        小規模ジム・個人事業の現場を知るからこそ、必要最低限のシステム設計でコストを最適化
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4" data-oid="mb7xgwg">
                                    <div className="flex-shrink-0" data-oid="l.fcoz.">
                                        <div
                                            className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                                            data-oid="n:ua6n0"
                                        >
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="ltasas9"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="xub5yyb"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-800" data-oid="x41h:s8">
                                        伴走型サポートで、運用から保守までまるごとお任せください
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* サービスセクション */}
                <section id="services" className="py-20 bg-gray-50" data-oid="e4ev:.9">
                    <div className="max-w-7xl mx-auto px-6" data-oid=":gpzz65">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="xca1c-a"
                        >
                            サービス内容
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="ggi4h58">
                            伴走型の開発体制で、ジム運営を全面サポート。
                            <br data-oid="z2xkgu7" />
                            ホームページ制作・リプレイス、予約管理システム、継続的な保守・運用支援を提供します。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="on_bb9p">
                            {/* ホームページ制作・リプレイス */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="i4j0w9s"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="lghmmf."
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="5u94dff"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7h18M3 12h18M3 17h18"
                                            data-oid="hg8yex5"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="x1da3b0"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-700" data-oid="5xd.wfb">
                                    オリジナルデザインのホームページ制作や既存ホームページのリプレイスを行います。
                                    <br data-oid="95mv826" />
                                    集客力の向上のため、内部SEO対策、MEO対策も実施いたします。
                                </p>
                            </div>
                            {/* 予約・会員管理システム */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="o9ifmvx"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="5pp3x:u"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="6yttxy."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3M16 7V3M4 11h16M4 15h16M4 19h16"
                                            data-oid="n0.xltu"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="bsbk2i0"
                                >
                                    システム開発
                                </h3>
                                <p className="text-gray-700" data-oid="fme-7jl">
                                    予約管理システムや会員管理システムなど、ジム運営を効率化するシステムを開発いたします。
                                </p>
                            </div>
                            {/* 継続的な保守・運用サポート */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="dpc5qj_"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="z_:frkf"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="fpoj2vl"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="lex8019"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="--fu67w"
                                >
                                    継続的な保守・運用サポート
                                </h3>
                                <p className="text-gray-700" data-oid="w3:9k2o">
                                    一度作って終わりではなく、伴走型での運用支援により、常に最適な状態を維持いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 実績・事例セクション */}
                <section id="portfolio" className="py-20" data-oid="dyslfyq">
                    <div className="max-w-7xl mx-auto px-6" data-oid="g.o4_mj">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="ba8-5.i"
                        >
                            実績・事例
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="37diy57">
                            過去のプロジェクトを通じて、道場運営の課題を解決した事例をご紹介
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="tuoq9vz">
                            {/* 事例1 */}
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="k-mf3bd"
                            >
                                <a
                                    href="https://timetable-hideskick.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    data-oid="bb.b.nw"
                                >
                                    <div
                                        className="aspect-video overflow-hidden"
                                        data-oid=":0kicos"
                                    >
                                        <Image
                                            src="/images/hides-timetable.webp"
                                            alt="体験予約受付システム hides timetable"
                                            width={600}
                                            height={400}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                            data-oid="p8ga.k3"
                                        />
                                    </div>
                                    <div className="p-6" data-oid=":4:ayf0">
                                        <h3
                                            className="text-xl font-semibold text-gray-900 mb-2"
                                            data-oid="5yarw6w"
                                        >
                                            体験予約受付システム
                                            <span
                                                className="text-sm text-gray-500"
                                                data-oid="z1m4mch"
                                            >
                                                Hide&apos;s Kick様
                                            </span>
                                        </h3>
                                        <p className="text-gray-700" data-oid="66n8xd3">
                                            オンラインでの体験予約受付システムを開発。タイムテーブルに模した予約フォームを実現。
                                        </p>
                                    </div>
                                </a>
                            </div>
                            {/* 事例2 */}
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="w4kvuum"
                            >
                                <div className="aspect-video overflow-hidden" data-oid="mtt9aut">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 600 400"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="m.da-b6"
                                    >
                                        <rect
                                            width="600"
                                            height="400"
                                            fill="#cccccc"
                                            data-oid="ci-5jjh"
                                        />

                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fill="#666666"
                                            fontSize="24"
                                            data-oid="4saw4lo"
                                        >
                                            Sample Image
                                        </text>
                                    </svg>
                                </div>
                                <div className="p-6" data-oid="0.int4:">
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="ts2r32e"
                                    >
                                        ホームページ制作
                                        <span className="text-sm text-gray-500" data-oid=".u8stu8">
                                            HK Studio様
                                        </span>
                                    </h3>
                                    <p className="text-gray-700" data-oid="4l_b.zk">
                                        オリジナルデザインのホームページ制作。パーソナルジムの雰囲気を活かしたデザインを実現。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* プロフィールセクション */}
                <section id="profile" className="py-20 bg-gray-50" data-oid="v7430at">
                    <div className="max-w-4xl mx-auto px-6 text-center" data-oid="bedko2j">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" data-oid="uvs8lmm">
                            プロフィール
                        </h2>
                        <div
                            className="flex flex-col md:flex-row items-center justify-center"
                            data-oid="lgghzxa"
                        >
                            <Image
                                src="/images/my_image.webp"
                                alt="WEBエンジニア 堀江 遼佑のプロフィール画像"
                                width={200}
                                height={200}
                                className="rounded-full mb-6 md:mb-0 md:mr-8"
                                data-oid="i_1eh4z"
                            />

                            <div className="text-left" data-oid="7ggqv2k">
                                <p
                                    className="text-xl text-gray-900 font-semibold"
                                    data-oid="nexmixa"
                                >
                                    WEBエンジニア × 格闘技ジムスタッフ
                                </p>
                                <p className="text-gray-700 mt-4" data-oid=".p.:0uo">
                                    WEBエンジニアとしての開発経験、さらに格闘技ジムでの現場経験を活かし、ITが苦手な小規模ジムや個人事業オーナーに寄り添ったサポートを提供しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 料金・プランセクション */}
                <section id="pricing" className="py-20 bg-gray-50" data-oid="7ze4mg:">
                    <div className="max-w-5xl mx-auto px-6" data-oid="gzynou8">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="g6o1u-2"
                        >
                            料金・プラン
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="v9l.szu">
                            ニーズに合わせてご相談させていただきます。以下は目安となります。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="3o4hsed">
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="fdjadoy">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="v-925st"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="o27o.59">
                                    初期費用：¥30,000～
                                </p>
                                <p className="text-gray-700" data-oid="6oczs:2">
                                    内部SEO対策とMEO対策を実施し、集客力の向上をサポートします。
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="b7qo381">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="2mqb06a"
                                >
                                    システム開発
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="fajcleu">
                                    初期費用：¥100,000～
                                </p>
                                <p className="text-gray-700" data-oid="pg6rwxi">
                                    ご要望に合わせたシステムをスクラッチ開発いたします。プロジェクト規模に合わせて柔軟にお見積りいたします。
                                </p>
                            </div>
                        </div>
                        <div className="mt-16" data-oid="ieqp:rr">
                            <h3
                                className="text-3xl font-bold text-center text-gray-900 mb-12"
                                data-oid="rvqoh6x"
                            >
                                導入の流れ
                            </h3>
                            <div className="relative max-w-6xl mx-auto" data-oid="apx--24">
                                {/* 背景の接続線 - デスクトップ */}
                                <div
                                    className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"
                                    data-oid="x13l45w"
                                ></div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                                    data-oid="4crbw6f"
                                >
                                    {[
                                        {
                                            step: 1,
                                            title: 'ヒアリング',
                                            description:
                                                'ジムの強み・課題を丁寧に伺い、サイトやシステムに求める機能を設計',
                                            icon: 'M9 5l7 7-7 7',
                                        },
                                        {
                                            step: 2,
                                            title: '開発',
                                            description:
                                                'モックアップ確認、フィードバックを踏まえつつ実装',
                                            icon: 'M9 5l7 7-7 7',
                                        },
                                        {
                                            step: 3,
                                            title: '納品・公開',
                                            description: 'スムーズなリリースを実現',
                                            icon: 'M9 5l7 7-7 7',
                                        },
                                        {
                                            step: 4,
                                            title: '運用・継続サポート',
                                            description:
                                                '月次レポート（アクセス・予約数分析）、機能追加提案、セキュリティ対応',
                                            icon: 'M9 5l7 7-7 7',
                                        },
                                    ].map((step, index, array) => (
                                        <div key={index} className="relative" data-oid="7xx20uj">
                                            <div className="relative" data-oid="mc:l5v-">
                                                {/* ステップカード */}
                                                <div
                                                    className="bg-white rounded-xl shadow-lg p-6 relative h-[160px] lg:h-[200px]"
                                                    data-oid="bip8-ae"
                                                >
                                                    {/* ステップ番号 */}
                                                    <div
                                                        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                                                        data-oid="9tf3::g"
                                                    >
                                                        {step.step}
                                                    </div>

                                                    <div
                                                        className="mt-4 flex flex-col h-[100px] lg:h-[140px]"
                                                        data-oid="590tppw"
                                                    >
                                                        <h4
                                                            className="text-xl font-bold text-gray-900 mb-3 text-center"
                                                            data-oid="qfd11ag"
                                                        >
                                                            {step.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-700 text-center text-sm"
                                                            data-oid="m:fbx2z"
                                                        >
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* 矢印 - 最後のカード以外に表示 */}
                                                {index !== array.length - 1 && (
                                                    <div
                                                        className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                                                        data-oid="n4cvmt5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                                                            data-oid="ouvl8ky"
                                                        >
                                                            <svg
                                                                className="w-5 h-5 text-white"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="zce3hi:"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d={step.icon}
                                                                    data-oid="rsaa8v6"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section id="contact" className="py-20 bg-gray-100" data-oid="ul8k3dp">
                    <div className="max-w-3xl mx-auto px-6" data-oid="0a65.5o">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="8f5cv:1"
                        >
                            お問い合わせ
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="52nxdjr">
                            お気軽にご連絡ください。ご相談内容に合わせた最適なご提案をいたします。
                        </p>
                        <form className="space-y-6" data-oid="43v-s69">
                            <div data-oid=":22ys54">
                                <label className="block text-gray-800 mb-2" data-oid="e4qibkr">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="山田 太郎"
                                    data-oid="8xdqbch"
                                />
                            </div>
                            <div data-oid="mhmvsri">
                                <label className="block text-gray-800 mb-2" data-oid="kfri.dj">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="your@email.com"
                                    data-oid="xn6yx1n"
                                />
                            </div>
                            <div data-oid="tclz3:g">
                                <label className="block text-gray-800 mb-2" data-oid="jfpe4rh">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="ご相談内容をご記入ください"
                                    data-oid="lhohbqq"
                                />
                            </div>
                            <div className="text-center pt-4" data-oid="cow0bkj">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                                    data-oid="761m-ah"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* フッター */}
            <footer className="bg-gray-200 text-gray-700 py-8" data-oid="pu_d43c">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="ke3vz-g">
                    <p data-oid="wjvkoig">© 2025 ryosuke horie . All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
