import Image from 'next/image';
export default function Home() {
    return (
        <div className="min-h-screen bg-white" data-oid="zfvm6p5">
            {/* ナビゲーション */}
            <nav className="fixed w-full z-50 bg-white shadow-md" data-oid="4ttnykc">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center p-6"
                    data-oid="yz6y903"
                >
                    <div className="text-xl font-bold text-gray-800" data-oid="j4ne60o">
                        WEBエンジニア | 堀江 遼佑
                    </div>
                    <div className="space-x-4" data-oid="4ge:q5l">
                        <a
                            href="#hero"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="b92.53o"
                        >
                            ホーム
                        </a>
                        <a
                            href="#services"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="wf0c.lm"
                        >
                            サービス
                        </a>
                        <a
                            href="#portfolio"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="dol8hch"
                        >
                            実績
                        </a>
                        <a
                            href="#profile"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="48wurwb"
                        >
                            プロフィール
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="2j3strf"
                        >
                            お客様の声
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="95y33a0"
                        >
                            料金
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-800 hover:text-blue-600"
                            data-oid="dxwzeav"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-20" data-oid="exveen8">
                {/* Heroセクション */}
                <section
                    id="hero"
                    className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
                    data-oid="i0o51xu"
                >
                    {/* グラデーション背景（ヒーロー内に収める） */}
                    <div className="absolute inset-0" data-oid="fizl5w3">
                        <div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 blur-3xl opacity-40 animate-pulse"
                            data-oid="bnky11_"
                        ></div>
                    </div>
                    <div className="relative z-10 text-center px-4" data-oid="8ssuxla">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            data-oid="uvdokte"
                        >
                            格闘技ジムの現場を知る
                            <br data-oid="xgj2_vx" />
                            WEBエンジニアが、
                            <br data-oid="zqzcjz_" />
                            伴走型の制作・開発で
                            <br data-oid="1s6sjft" />
                            あなたの道場運営を支えます
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8" data-oid="qq2m87m">
                            ITが苦手なオーナーにも安心していただける、寄り添い型のサポート体制を実現。
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors"
                            data-oid="y2purga"
                        >
                            まずはご相談ください
                        </a>
                    </div>
                </section>

                {/* サービスセクション */}
                <section id="services" className="py-20 bg-gray-50" data-oid=".w-43qw">
                    <div className="max-w-7xl mx-auto px-6" data-oid="l74umu:">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="8x_jol_"
                        >
                            サービス内容
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="42nrs:2">
                            伴走型の開発体制で、ジム運営を全面サポート。
                            <br data-oid="n9rmo-x" />
                            ホームページ制作・リプレイス、予約管理システム、継続的な保守・運用支援を提供します。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="_:bhhw9">
                            {/* ホームページ制作・リプレイス */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="gaxvsx8"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="qbj39rz"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="cw6w.x:"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7h18M3 12h18M3 17h18"
                                            data-oid="kbpkbmi"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="u:p509k"
                                >
                                    ホームページ制作
                                </h3>
                                <p className="text-gray-700" data-oid="wx5r9qt">
                                    オリジナルデザインのホームページ制作や既存ホームページのリプレイスを行います。
                                    <br data-oid=":su6maz" />
                                    集客力の向上のため、内部SEO対策、MEO対策も実施いたします。
                                </p>
                            </div>
                            {/* 予約・会員管理システム */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="cpkv5se"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="aiobeco"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-xe9-qr"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3M16 7V3M4 11h16M4 15h16M4 19h16"
                                            data-oid="eircrx2"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="_y5qwdu"
                                >
                                    システム開発
                                </h3>
                                <p className="text-gray-700" data-oid="fnb7d86">
                                    予約管理システムや会員管理システムなど、ジム運営を効率化するシステムを開発いたします。
                                </p>
                            </div>
                            {/* 継続的な保守・運用サポート */}
                            <div
                                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                                data-oid="v6lr-to"
                            >
                                <div
                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                    data-oid="nc4si--"
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="o.ylkm8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="3sezk5k"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="tal1yl8"
                                >
                                    継続的な保守・運用サポート
                                </h3>
                                <p className="text-gray-700" data-oid="iyikb43">
                                    一度作って終わりではなく、伴走型での運用支援により、常に最適な状態を維持いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 実績・事例セクション */}
                <section id="portfolio" className="py-20" data-oid="tkyijlf">
                    <div className="max-w-7xl mx-auto px-6" data-oid="f207dpp">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid=".lr0grf"
                        >
                            実績・事例
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="vjrcj94">
                            過去のプロジェクトを通じて、道場運営の課題を解決した事例をご紹介
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="g8o6._r">
                            {/* プロジェクトカード例 */}
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="ffw3lg:"
                            >
                                <div className="aspect-video overflow-hidden" data-oid="559ns2p">
                                    <img
                                        src="https://placehold.co/600x400?text=プロジェクト1"
                                        alt="プロジェクト1"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="pqoj5u3"
                                    />
                                </div>
                                <div className="p-6" data-oid="k4pnala">
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="e80dpyn"
                                    >
                                        道場HPリニューアル
                                    </h3>
                                    <p className="text-gray-700" data-oid="fp6lusv">
                                        既存サイトの刷新により、予約数が向上した事例。
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="5h1_cq."
                            >
                                <div className="aspect-video overflow-hidden" data-oid="ypppr6h">
                                    <img
                                        src="https://placehold.co/600x400?text=プロジェクト2"
                                        alt="プロジェクト2"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="u3gfkoi"
                                    />
                                </div>
                                <div className="p-6" data-oid="gakiip0">
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="gmit9md"
                                    >
                                        予約管理システム構築
                                    </h3>
                                    <p className="text-gray-700" data-oid="g9t-yp8">
                                        会員管理と出欠確認を一元管理できるシステムを開発。
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                                data-oid="h::zip1"
                            >
                                <div className="aspect-video overflow-hidden" data-oid="bmeaf9_">
                                    <img
                                        src="https://placehold.co/600x400?text=プロジェクト3"
                                        alt="プロジェクト3"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                        data-oid="z.r6ecy"
                                    />
                                </div>
                                <div className="p-6" data-oid="huighww">
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mb-2"
                                        data-oid="bmkuoim"
                                    >
                                        保守・運用サポート
                                    </h3>
                                    <p className="text-gray-700" data-oid="_ljdr9s">
                                        継続的なサポートで、常に最適な状態を維持。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* プロフィールセクション */}
                <section id="profile" className="py-20 bg-gray-50" data-oid="ik1olm1">
                    <div className="max-w-4xl mx-auto px-6 text-center" data-oid="y33jtgv">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" data-oid="ays.314">
                            プロフィール
                        </h2>
                        <div
                            className="flex flex-col md:flex-row items-center justify-center"
                            data-oid="v4hgoug"
                        >
                            <Image
                                src="/images/my_image.webp"
                                alt="WEBエンジニア 堀江 遼佑のプロフィール画像"
                                width={200}
                                height={200}
                                className="rounded-full mb-6 md:mb-0 md:mr-8"
                                data-oid=":o9o8e-"
                            />

                            <div className="text-left" data-oid="-sp7wae">
                                <p
                                    className="text-xl text-gray-900 font-semibold"
                                    data-oid="7mr.wyo"
                                >
                                    WEBエンジニア × 格闘技ジムスタッフ
                                </p>
                                <p className="text-gray-700 mt-4" data-oid="._7hm58">
                                    長年のWEB制作とフロントエンドエンジニアとしての経験、さらに格闘技ジムでの現場経験を活かし、ITが苦手な小規模ジムや個人事業オーナーに寄り添ったサポートを提供しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* お客様の声セクション */}
                <section id="testimonials" className="py-20" data-oid="b863hg9">
                    <div className="max-w-5xl mx-auto px-6" data-oid="ztwq247">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="537wd2f"
                        >
                            お客様の声
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="f95cwyh">
                            現場を知るエンジニアならではの提案が、多くのジムオーナー様から高い評価をいただいています。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="qvvc7-i">
                            <div className="bg-white p-6 rounded-xl shadow-md" data-oid="gaxib9b">
                                <p className="text-gray-700 mb-4" data-oid="27ddmyj">
                                    "初めてのWEB制作でしたが、親身なサポートで安心して進めることができました。現場のニーズを的確に理解していただけた点が素晴らしいです。"
                                </p>
                                <p className="text-gray-900 font-semibold" data-oid="karv_nq">
                                    ジムオーナー A様
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md" data-oid="_6t-0_-">
                                <p className="text-gray-700 mb-4" data-oid="yitzb5b">
                                    "柔軟な対応と継続サポートにより、運営が格段にスムーズになりました。小規模ジムにも最適な提案でした。"
                                </p>
                                <p className="text-gray-900 font-semibold" data-oid="-3:o5ko">
                                    ジムスタッフ B様
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 料金・プランセクション */}
                <section id="pricing" className="py-20 bg-gray-50" data-oid="nd8xple">
                    <div className="max-w-5xl mx-auto px-6" data-oid="jwolf:t">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="gd7k2yh"
                        >
                            料金・プラン
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="udt-l96">
                            透明性のある料金体系で、初めての方でも安心してご利用いただけます。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="dp..yb3">
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid=".pjdfd7">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="4oyjf_j"
                                >
                                    LP制作プラン
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="tj-.n2m">
                                    初期費用：¥●●●●
                                </p>
                                <p className="text-gray-700" data-oid=".lyu2:z">
                                    簡単な予約管理システム付き
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="v6_mwmo">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="359eki5"
                                >
                                    フルサイト制作プラン
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="k7pyear">
                                    初期費用：¥●●●●
                                </p>
                                <p className="text-gray-700" data-oid="1ksfhmb">
                                    オリジナルデザインとシステム開発
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-white shadow-md" data-oid="tlyh15l">
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="6yelke3"
                                >
                                    カスタムシステム連携
                                </h3>
                                <p className="text-gray-700 mb-4" data-oid="ff67gcf">
                                    追加料金：¥●●●●～
                                </p>
                                <p className="text-gray-700" data-oid=".hmr5s3">
                                    ご要望に合わせた柔軟な対応
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 text-center" data-oid="kgue9mh">
                            <p className="text-gray-700" data-oid="-r-tus8">
                                【導入の流れ】 ヒアリング → 要件定義 → デザイン・開発 → 納品 →
                                運用・継続サポート
                            </p>
                        </div>
                    </div>
                </section>

                {/* お問い合わせセクション */}
                <section id="contact" className="py-20 bg-gray-100" data-oid="9erkxzg">
                    <div className="max-w-3xl mx-auto px-6" data-oid="l6vuqj7">
                        <h2
                            className="text-3xl font-bold text-center text-gray-900 mb-4"
                            data-oid="4bt1nti"
                        >
                            お問い合わせ
                        </h2>
                        <p className="text-center text-gray-700 mb-12" data-oid="dviv7j8">
                            お気軽にご連絡ください。ご相談内容に合わせた最適なご提案をいたします。
                        </p>
                        <form className="space-y-6" data-oid="jkzj_w4">
                            <div data-oid="b2ueipz">
                                <label className="block text-gray-800 mb-2" data-oid=".l_-3yb">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="山田 太郎"
                                    data-oid="xpnxq.f"
                                />
                            </div>
                            <div data-oid="3t7-ifu">
                                <label className="block text-gray-800 mb-2" data-oid="m3c24cq">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="your@email.com"
                                    data-oid="_:9cs18"
                                />
                            </div>
                            <div data-oid="3_5s85_">
                                <label className="block text-gray-800 mb-2" data-oid="eodw3os">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
                                    placeholder="ご相談内容をご記入ください"
                                    data-oid="a3e8on:"
                                ></textarea>
                            </div>
                            <div className="text-center pt-4" data-oid="43ymkzd">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                                    data-oid="bwqhrtw"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* フッター */}
            <footer className="bg-gray-200 text-gray-700 py-8" data-oid=":k1zf7t">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="9wi-u53">
                    <p data-oid="yxl2q8j">© 2025 ryosuke horie . All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
