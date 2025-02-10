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
        <div className="min-h-screen bg-black" data-oid="4gic0xd">
            <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm" data-oid="4n7kjsx">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="bpvu0aj"
                >
                    <div
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
                        data-oid="lc2v_47"
                    >
                        デベロップメント
                    </div>
                    <div className="space-x-8" data-oid="b7m1bk_">
                        <a
                            href="#services"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid="h4xmzkw"
                        >
                            サービス
                        </a>
                        <a
                            href="#contact"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid="h06_1j4"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main data-oid="xgy3yln">
                <section
                    className="min-h-screen relative overflow-hidden flex items-center"
                    data-oid="nza7dyz"
                >
                    {/* Background gradient effects */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-3xl opacity-50 animate-pulse"
                        data-oid="nun1b54"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-30 animate-pulse delay-1000"
                        data-oid="df5t.3p"
                    ></div>

                    <div
                        className="max-w-7xl mx-auto px-6 relative w-full pt-20"
                        data-oid="gwjn-yw"
                    >
                        <div className="text-center max-w-4xl mx-auto" data-oid="8ni6pv.">
                            <h1
                                className="text-7xl font-bold mb-8 tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-300 text-transparent bg-clip-text"
                                data-oid="g3thuvn"
                            >
                                WEB開発の
                                <br data-oid="cuwn9rm" />
                                スペシャリスト
                            </h1>
                            <p
                                className="text-2xl text-slate-300 mb-12 leading-relaxed"
                                data-oid="q0jyc-7"
                            >
                                あなたのビジョンを
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"
                                    data-oid="tto2vrg"
                                >
                                    最高のウェブサイト
                                </span>
                                に
                            </p>
                            <div
                                className="flex items-center justify-center gap-6"
                                data-oid="x69:323"
                            >
                                <div className="inline-block relative group" data-oid="5j3oy77">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"
                                        data-oid="u2:qzrt"
                                    ></div>
                                    <button
                                        className="relative px-8 py-4 bg-black text-white rounded-lg transition-all duration-200 hover:bg-slate-900"
                                        data-oid="tludtk9"
                                    >
                                        お問い合わせはこちら
                                    </button>
                                </div>
                                <a
                                    href="#services"
                                    className="px-8 py-4 text-slate-300 hover:text-white transition-colors duration-200"
                                    data-oid="rar:ifk"
                                >
                                    サービスを見る →
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="mt-20 relative" data-oid="61er:h8">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[50px] bg-gradient-to-b from-slate-500/50 to-transparent"
                                    data-oid="59oq.7z"
                                ></div>
                                <div
                                    className="absolute top-[50px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400/50"
                                    data-oid="osi:1wr"
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="works"
                    className="py-32 bg-black/50 backdrop-blur-sm"
                    data-oid=".wwu.6f"
                >
                    <div className="max-w-7xl mx-auto px-6" data-oid="b2vr:fi">
                        <h2 className="text-4xl font-bold text-center mb-4" data-oid="q:.2rrz">
                            <span
                                className="bg-gradient-to-r from-white via-white to-slate-200 text-transparent bg-clip-text"
                                data-oid="pt8j5xt"
                            >
                                制作・開発実績
                            </span>
                        </h2>
                        <p className="text-slate-400 text-center mb-16" data-oid="q9e6gg-">
                            クライアント様のビジョンを実現したプロジェクト
                        </p>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="eaj80ec"
                        >
                            {/* Project Card 1 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="9nt9k3m"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="9bjdkx3"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="7jw.nnx"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+1"
                                        alt="Project 1"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="vbsozxt"
                                    />
                                </div>
                                <div className="p-6" data-oid="q:4pv1b">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid=".-07fxu"
                                    >
                                        コーポレートサイトリニューアル
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="pltcbz7">
                                        最新のデザインとテクノロジーを活用し、ブランドイメージを刷新
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="q:ooz37">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="rddvjdv"
                                        >
                                            Next.js
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="z2dtiuc"
                                        >
                                            Tailwind CSS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 2 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="tx1e7w4"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="udqem.j"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="10sdj59"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+2"
                                        alt="Project 2"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="_x9xgx4"
                                    />
                                </div>
                                <div className="p-6" data-oid="::jt5pr">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid="1ew9kh2"
                                    >
                                        ECサイト開発
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="s6q4xv5">
                                        高いパフォーマンスと使いやすさを両立したショッピングサイト
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="dna0dbb">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="qxhpp3-"
                                        >
                                            React
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="puwnl_a"
                                        >
                                            TypeScript
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 3 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="dgp3ngp"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="vku4_e-"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="m-uammx"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+3"
                                        alt="Project 3"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="g31fn4m"
                                    />
                                </div>
                                <div className="p-6" data-oid="yb8o6x2">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid="kmae2o:"
                                    >
                                        業務管理システム
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="h:w_7s5">
                                        業務効率を大幅に改善するカスタマイズ管理システム
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="j3p.omq">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="av9y7de"
                                        >
                                            Next.js
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="q2y0cbr"
                                        >
                                            Prisma
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-20 bg-white" data-oid="k1sswbv">
                    <div className="max-w-7xl mx-auto px-6" data-oid="ybe81if">
                        <h2
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            data-oid="be4y.ix"
                        >
                            サービス内容
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="m2:2too">
                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="sdy3bpj"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="r4au6w."
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="uisr3f1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="2xsof_9"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="tn3af.p"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-600" data-oid="8x-b.gv">
                                    最新のデザインとテクノロジーを活用した、魅力的なウェブサイトを制作します。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="j9z5g6z"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="6bf-_a3"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="hz_9g9-"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            data-oid="90kufd8"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="3wcdfje"
                                >
                                    WEB開発
                                </h3>
                                <p className="text-gray-600" data-oid="5_ya5ar">
                                    React、Next.jsなど最新のフレームワークを使用した高性能なウェブアプリケーションの開発。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="gy5_9tq"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="kag3ud1"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="hzuk71-"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid=":0sauua"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="ojdeyxz"
                                >
                                    保守・運用
                                </h3>
                                <p className="text-gray-600" data-oid="ohc2uc3">
                                    ウェブサイトの継続的な改善と安定した運用をサポートします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20" data-oid="chj2da.">
                    <div className="max-w-3xl mx-auto px-6" data-oid="6e0sahm">
                        <h2
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            data-oid="7cbj86u"
                        >
                            お問い合わせ
                        </h2>
                        <form className="space-y-6" data-oid="xfw2tvc">
                            <div data-oid="c9cnwuz">
                                <label className="block text-gray-700 mb-2" data-oid="kg358wu">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    data-oid="vgtcmvr"
                                />
                            </div>
                            <div data-oid="0rj9kv_">
                                <label className="block text-gray-700 mb-2" data-oid="g565zc3">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    data-oid="3be50i:"
                                />
                            </div>
                            <div data-oid="0-xc9qe">
                                <label className="block text-gray-700 mb-2" data-oid="0bzxbal">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
                                    data-oid="7kf0:ct"
                                ></textarea>
                            </div>
                            <div className="text-center" data-oid="8fhrw1u">
                                <button
                                    className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                    data-oid="9l_kpph"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-12" data-oid="vt3v71v">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="etbf70y">
                    <p data-oid="racj3.l">© 2024 デベロップメント. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
