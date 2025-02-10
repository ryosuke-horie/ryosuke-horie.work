'use client';

const floatAnimation = {
    float: `@keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }`,
    floatSlow: `@keyframes floatSlow {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
    }`,
    scaleBreathing: `@keyframes scaleBreathing {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }`,
    fadeInUp: `@keyframes fadeInUp {
        0% { 
            opacity: 0;
            transform: translateY(20px);
        }
        100% { 
            opacity: 1;
            transform: translateY(0);
        }
    }`,
};

export default function Page() {
    return (
        <div className="min-h-screen bg-black" data-oid="jmi5il4">
            <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm" data-oid="yx5o07e">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="-ef5k2r"
                >
                    <div
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
                        data-oid="ofif1yf"
                    >
                        デベロップメント
                    </div>
                    <div className="space-x-8" data-oid=".057ckn">
                        <a
                            href="#services"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid=".jtliwo"
                        >
                            サービス
                        </a>
                        <a
                            href="#contact"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid="3mtjbp0"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main data-oid="6h05wfx">
                <section
                    className="min-h-screen relative overflow-hidden flex items-center"
                    data-oid="tlulakt"
                >
                    {/* Background gradient effects */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-3xl opacity-50 animate-pulse"
                        data-oid="i73z1or"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-30 animate-pulse delay-1000"
                        data-oid=".gaa64q"
                    ></div>

                    <div
                        className="max-w-7xl mx-auto px-6 relative w-full pt-20"
                        data-oid="3ggvw7v"
                    >
                        <div className="text-center max-w-4xl mx-auto" data-oid="l00fkij">
                            <h1
                                className="text-7xl font-bold mb-8 tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-300 text-transparent bg-clip-text"
                                data-oid="kwp9a17"
                            >
                                WEB開発の
                                <br data-oid="oo:42t3" />
                                スペシャリスト
                            </h1>
                            <p
                                className="text-2xl text-slate-300 mb-12 leading-relaxed"
                                data-oid="m2ondiy"
                            >
                                あなたのビジョンを
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"
                                    data-oid="qr5xntv"
                                >
                                    最高のウェブサイト
                                </span>
                                に
                            </p>
                            <div
                                className="flex items-center justify-center gap-6"
                                data-oid="npm.p54"
                            >
                                <div className="inline-block relative group" data-oid="5mq9szt">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"
                                        data-oid="-kufz8m"
                                    ></div>
                                    <button
                                        className="relative px-8 py-4 bg-black text-white rounded-lg transition-all duration-200 hover:bg-slate-900"
                                        data-oid="tpwfuny"
                                    >
                                        お問い合わせはこちら
                                    </button>
                                </div>
                                <a
                                    href="#services"
                                    className="px-8 py-4 text-slate-300 hover:text-white transition-colors duration-200"
                                    data-oid="aa7f.h7"
                                >
                                    サービスを見る →
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="mt-20 relative" data-oid="24hg42_">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[50px] bg-gradient-to-b from-slate-500/50 to-transparent"
                                    data-oid="sf5:33u"
                                ></div>
                                <div
                                    className="absolute top-[50px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400/50"
                                    data-oid="al.6f8k"
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-20 bg-white" data-oid="4r0pijk">
                    <div className="max-w-7xl mx-auto px-6" data-oid="rztoas2">
                        <h2
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            data-oid="jh:lbvg"
                        >
                            サービス内容
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="amldt8n">
                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="j66x.4f"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="zpsfg75"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="w8g0fd5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="ovh9wa9"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid=":kgpi8d"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-600" data-oid=".fxgqh_">
                                    最新のデザインとテクノロジーを活用した、魅力的なウェブサイトを制作します。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="il2_dww"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="uijt21q"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="4to9gdg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            data-oid="--vk70j"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="p6g:6xk"
                                >
                                    WEB開発
                                </h3>
                                <p className="text-gray-600" data-oid="_xxeqg:">
                                    React、Next.jsなど最新のフレームワークを使用した高性能なウェブアプリケーションの開発。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="xml7m-_"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="r5bk507"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="drz229q"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="6u1w5hj"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="ykmqnr8"
                                >
                                    保守・運用
                                </h3>
                                <p className="text-gray-600" data-oid="zt5iagg">
                                    ウェブサイトの継続的な改善と安定した運用をサポートします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20" data-oid=":14a455">
                    <div className="max-w-3xl mx-auto px-6" data-oid="s1v_aub">
                        <h2
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            data-oid="qtas_sc"
                        >
                            お問い合わせ
                        </h2>
                        <form className="space-y-6" data-oid="wwe.e70">
                            <div data-oid="1_8ser2">
                                <label className="block text-gray-700 mb-2" data-oid="vx:4x3e">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    data-oid="8.hixna"
                                />
                            </div>
                            <div data-oid="u0y0ol8">
                                <label className="block text-gray-700 mb-2" data-oid="hn_fhn.">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    data-oid="qpore4y"
                                />
                            </div>
                            <div data-oid="xxz-zwb">
                                <label className="block text-gray-700 mb-2" data-oid="co:sq:f">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
                                    data-oid="_w:walw"
                                ></textarea>
                            </div>
                            <div className="text-center" data-oid="wwgmvno">
                                <button
                                    className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                    data-oid="wm89vh:"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-12" data-oid="9wi26a5">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="5v5va0u">
                    <p data-oid="z5ih424">© 2024 デベロップメント. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
