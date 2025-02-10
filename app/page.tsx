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
        <div className="min-h-screen bg-black" data-oid="xg5wkqu">
            <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm" data-oid="7_mym56">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="m5tdet:"
                >
                    <div
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
                        data-oid=":dz5rbv"
                    >
                        デベロップメント
                    </div>
                    <div className="space-x-8" data-oid="902z-:n">
                        <a
                            href="#services"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid="qt0njz:"
                        >
                            サービス
                        </a>
                        <a
                            href="#contact"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            data-oid="avi0ys9"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main data-oid="w_tjlat">
                <section
                    className="min-h-screen relative overflow-hidden flex items-center"
                    data-oid="vb_:70k"
                >
                    {/* Background gradient effects */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-3xl opacity-50 animate-pulse"
                        data-oid="ahtas9s"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-30 animate-pulse delay-1000"
                        data-oid="jax8x89"
                    ></div>

                    <div
                        className="max-w-7xl mx-auto px-6 relative w-full pt-20"
                        data-oid="u_eouea"
                    >
                        <div className="text-center max-w-4xl mx-auto" data-oid="l6ehto2">
                            <h1
                                className="text-7xl font-bold mb-8 tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-300 text-transparent bg-clip-text"
                                data-oid=":1o51al"
                            >
                                WEB開発の
                                <br data-oid=":2079qz" />
                                スペシャリスト
                            </h1>
                            <p
                                className="text-2xl text-slate-300 mb-12 leading-relaxed"
                                data-oid="g6lcwua"
                            >
                                あなたのビジョンを
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"
                                    data-oid="bzwuzxa"
                                >
                                    最高のウェブサイト
                                </span>
                                に
                            </p>
                            <div
                                className="flex items-center justify-center gap-6"
                                data-oid="lponv0y"
                            >
                                <div className="inline-block relative group" data-oid="glvd0v1">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"
                                        data-oid="rt5oiio"
                                    ></div>
                                    <button
                                        className="relative px-8 py-4 bg-black text-white rounded-lg transition-all duration-200 hover:bg-slate-900"
                                        data-oid="hz1tddw"
                                    >
                                        お問い合わせはこちら
                                    </button>
                                </div>
                                <a
                                    href="#services"
                                    className="px-8 py-4 text-slate-300 hover:text-white transition-colors duration-200"
                                    data-oid="vn-496c"
                                >
                                    サービスを見る →
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="mt-20 relative" data-oid=".29_vtr">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[50px] bg-gradient-to-b from-slate-500/50 to-transparent"
                                    data-oid="09t2.0_"
                                ></div>
                                <div
                                    className="absolute top-[50px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400/50"
                                    data-oid="4-9lewy"
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="works"
                    className="py-32 bg-black/50 backdrop-blur-sm"
                    data-oid="c_us0fo"
                >
                    <div className="max-w-7xl mx-auto px-6" data-oid="095ahr5">
                        <h2 className="text-4xl font-bold text-center mb-4" data-oid="9-o7-nc">
                            <span
                                className="bg-gradient-to-r from-white via-white to-slate-200 text-transparent bg-clip-text"
                                data-oid="7:1hlpp"
                            >
                                制作・開発実績
                            </span>
                        </h2>
                        <p className="text-slate-400 text-center mb-16" data-oid="zl1f685">
                            クライアント様のビジョンを実現したプロジェクト
                        </p>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="5z5t01k"
                        >
                            {/* Project Card 1 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="uyn9ufl"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="rvjte-6"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="zvw3oed"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+1"
                                        alt="Project 1"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="-rz9l80"
                                    />
                                </div>
                                <div className="p-6" data-oid="jprjn._">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid="uzaaiw7"
                                    >
                                        コーポレートサイトリニューアル
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="ur-pi.t">
                                        最新のデザインとテクノロジーを活用し、ブランドイメージを刷新
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="g.2gla_">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="esj4.eh"
                                        >
                                            Next.js
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="t.qzf5c"
                                        >
                                            Tailwind CSS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 2 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="tyvka2b"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="f4gg:70"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="bbuex_m"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+2"
                                        alt="Project 2"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="ho4cbtl"
                                    />
                                </div>
                                <div className="p-6" data-oid="spbbx5m">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid=":_3f3ug"
                                    >
                                        ECサイト開発
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="e8nlwev">
                                        高いパフォーマンスと使いやすさを両立したショッピングサイト
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="jqzi.0_">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="kxf2j.."
                                        >
                                            React
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="1-_8u22"
                                        >
                                            TypeScript
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 3 */}
                            <div
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50"
                                data-oid="o36mpje"
                            >
                                <div
                                    className="aspect-video relative overflow-hidden"
                                    data-oid="vt6joqp"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity duration-300"
                                        data-oid="5e0o_sa"
                                    ></div>
                                    <img
                                        src="https://placehold.co/600x400/black/white?text=Project+3"
                                        alt="Project 3"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="-r3oaqr"
                                    />
                                </div>
                                <div className="p-6" data-oid="yltw31s">
                                    <h3
                                        className="text-xl font-semibold text-white mb-2"
                                        data-oid="88hrw3d"
                                    >
                                        業務管理システム
                                    </h3>
                                    <p className="text-slate-400 mb-4" data-oid="92spzps">
                                        業務効率を大幅に改善するカスタマイズ管理システム
                                    </p>
                                    <div className="flex flex-wrap gap-2" data-oid="ozj0wkb">
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="0gofyze"
                                        >
                                            Next.js
                                        </span>
                                        <span
                                            className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                                            data-oid="t33z.47"
                                        >
                                            Prisma
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-20 bg-white" data-oid="k1o4uo.">
                    <div className="max-w-7xl mx-auto px-6" data-oid="zm5b146">
                        <h2
                            className="text-3xl font-bold text-center text-gray-800 mb-12"
                            data-oid="4xf04ao"
                        >
                            サービス内容
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="u6-50d2">
                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="t62nx73"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="c-j95h:"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":.f8ygz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="qblo0wu"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="ayy5ako"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-600" data-oid="5.-p.0y">
                                    最新のデザインとテクノロジーを活用した、魅力的なウェブサイトを制作します。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid=":xk5mrs"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="qy-_3_n"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="cnbvua3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            data-oid="i-aajia"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="94f0ngh"
                                >
                                    WEB開発
                                </h3>
                                <p className="text-gray-600" data-oid="i0ufmi5">
                                    React、Next.jsなど最新のフレームワークを使用した高性能なウェブアプリケーションの開発。
                                </p>
                            </div>

                            <div
                                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl transition-shadow"
                                data-oid="y-m4f5r"
                            >
                                <div
                                    className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="nk-_8tv"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="1o49mqz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="fs0fj_s"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-800 mb-2"
                                    data-oid="k7490qt"
                                >
                                    保守・運用
                                </h3>
                                <p className="text-gray-600" data-oid="xtut_s-">
                                    ウェブサイトの継続的な改善と安定した運用をサポートします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="py-32 bg-slate-900/50 backdrop-blur-sm"
                    data-oid="u3yxkmk"
                >
                    <div className="max-w-3xl mx-auto px-6" data-oid="z368qa.">
                        <h2 className="text-4xl font-bold text-center mb-4" data-oid="lz2ca:0">
                            <span
                                className="bg-gradient-to-r from-white via-white to-slate-200 text-transparent bg-clip-text"
                                data-oid="_3qth5c"
                            >
                                お問い合わせ
                            </span>
                        </h2>
                        <p className="text-slate-400 text-center mb-16" data-oid="bf7jjfx">
                            お気軽にご相談ください
                        </p>
                        <form className="space-y-8" data-oid=":pfkr9s">
                            <div
                                className="bg-slate-900/50 p-8 rounded-xl border border-slate-800/50 backdrop-blur-sm space-y-6"
                                data-oid="hfpylmz"
                            >
                                <div data-oid="e5j5p3.">
                                    <label className="block text-slate-200 mb-2" data-oid="ed7scs5">
                                        お名前
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="山田 太郎"
                                        data-oid="7_4t-ep"
                                    />
                                </div>
                                <div data-oid="e4mdr5:">
                                    <label className="block text-slate-200 mb-2" data-oid="p7hvl2t">
                                        メールアドレス
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="your@email.com"
                                        data-oid="2tx3_u5"
                                    />
                                </div>
                                <div data-oid="3evgp33">
                                    <label className="block text-slate-200 mb-2" data-oid="xilx2qr">
                                        お問い合わせ内容
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors h-32"
                                        placeholder="ご相談内容をご記入ください"
                                        data-oid="i0rw219"
                                    ></textarea>
                                </div>
                                <div className="text-center pt-4" data-oid="ncawzb6">
                                    <button
                                        className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-[1.02] hover:from-violet-500 hover:to-blue-500"
                                        data-oid="3_9mbfv"
                                    >
                                        送信する
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-12" data-oid=":if3_h9">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="n6_slmq">
                    <p data-oid="b6nqd.:">© 2024 デベロップメント. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
