import Image from "next/image";
export default function Home() {
	return (
		<div className="min-h-screen bg-white" data-oid="f:fzju9">
			{/* ナビゲーション */}
			<nav className="fixed w-full z-50 bg-white shadow-md" data-oid="mlw3o6m">
				<div
					className="max-w-7xl mx-auto flex justify-between items-center p-6"
					data-oid=":v7j4t-"
				>
					<div className="text-xl font-bold text-gray-800" data-oid="z50j_iy">
						WEBエンジニア | 堀江 遼佑
					</div>
					<div className="space-x-4" data-oid="a22amd-">
						<a
							href="#hero"
							className="text-gray-800 hover:text-blue-600"
							data-oid="jb_:h38"
						>
							ホーム
						</a>
						<a
							href="#services"
							className="text-gray-800 hover:text-blue-600"
							data-oid="af:ww4l"
						>
							サービス
						</a>
						<a
							href="#portfolio"
							className="text-gray-800 hover:text-blue-600"
							data-oid="fe3tw_s"
						>
							実績
						</a>
						<a
							href="#profile"
							className="text-gray-800 hover:text-blue-600"
							data-oid="5se9-4p"
						>
							プロフィール
						</a>
						<a
							href="#pricing"
							className="text-gray-800 hover:text-blue-600"
							data-oid="r6mbov2"
						>
							料金
						</a>
						<a
							href="#contact"
							className="text-gray-800 hover:text-blue-600"
							data-oid="dx-tz8j"
						>
							お問い合わせ
						</a>
					</div>
				</div>
			</nav>

			<main className="pt-20" data-oid="ar8vkws">
				{/* Heroセクション */}
				<section
					id="hero"
					className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
					data-oid="c_3v8tr"
				>
					{/* グラデーション背景 */}
					<div className="absolute inset-0" data-oid="3ssb7kg">
						<div
							className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 blur-3xl opacity-40 animate-pulse"
							data-oid="erxnf7y"
						/>
					</div>
					<div className="relative z-10 text-center px-4" data-oid="t1625nw">
						<h1
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
							data-oid="zvt2kxu"
						>
							格闘技ジムの現場を知る
							<br data-oid="j-74ut7" />
							WEBエンジニアが、
							<br data-oid="xz.ijeg" />
							伴走型の制作・開発で
							<br data-oid="7wlsmwd" />
							あなたの道場運営を支えます
						</h1>
						<div
							className="space-y-6 text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
							data-oid="p8c4l9l"
						>
							<p className="leading-relaxed" data-oid=":2lffbr">
								ジムオーナーが
								<span className="font-medium" data-oid="hcmhj98">
									本業（トレーニング指導・顧客対応）に集中
								</span>
								できるよう、
								<br className="hidden md:block" data-oid="tsmvlb9" />
								Webまわりは
								<span className="text-blue-600" data-oid="oea34sn">
									すべておまかせください
								</span>
							</p>
							<p className="leading-relaxed" data-oid="7ru7byp">
								<span className="font-medium" data-oid="mc.wak9">
									予約管理・会員管理
								</span>
								などのシステム導入から、
								<br className="hidden md:block" data-oid="a69aejz" />
								ホームページの更新、SEO内部施策まで
								<span className="text-blue-600" data-oid="rl5wgmq">
									ワンストップでサポート
								</span>
							</p>
						</div>
						<a
							href="#contact"
							className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors"
							data-oid="1wd-.rd"
						>
							まずはご相談ください
						</a>
					</div>
				</section>

				{/* サービスセクション */}
				<section id="services" className="py-20 bg-gray-50" data-oid="j-x1eu:">
					<div className="max-w-7xl mx-auto px-6" data-oid="hulhv7c">
						<h2
							className="text-3xl font-bold text-center text-gray-900 mb-4"
							data-oid="v9laj2f"
						>
							サービス内容
						</h2>
						<p className="text-center text-gray-700 mb-12" data-oid=":ws.hrv">
							伴走型の開発体制で、ジム運営を全面サポート。
							<br data-oid="52qnaig" />
							ホームページ制作・リプレイス、予約管理システム、継続的な保守・運用支援を提供します。
						</p>
						<div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							data-oid="jtvle67"
						>
							{/* ホームページ制作・リプレイス */}
							<div
								className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
								data-oid="w64h:1n"
							>
								<div
									className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
									data-oid="uyn9pea"
								>
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										data-oid="6_:pt8o"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 7h18M3 12h18M3 17h18"
											data-oid="2us4z2q"
										/>
									</svg>
								</div>
								<h3
									className="text-xl font-semibold text-gray-900 mb-2"
									data-oid="18aphtq"
								>
									ホームページ制作
								</h3>
								<p className="text-gray-700" data-oid="pkwt3qz">
									オリジナルデザインのホームページ制作や既存ホームページのリプレイスを行います。
									<br data-oid="zia1e.1" />
									集客力の向上のため、内部SEO対策、MEO対策も実施いたします。
								</p>
							</div>
							{/* 予約・会員管理システム */}
							<div
								className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
								data-oid="ylu10nt"
							>
								<div
									className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
									data-oid="k4_v7--"
								>
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										data-oid="6zmo7ru"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7V3M16 7V3M4 11h16M4 15h16M4 19h16"
											data-oid="nh6qjq1"
										/>
									</svg>
								</div>
								<h3
									className="text-xl font-semibold text-gray-900 mb-2"
									data-oid="wicv23m"
								>
									システム開発
								</h3>
								<p className="text-gray-700" data-oid="4wzdhr4">
									予約管理システムや会員管理システムなど、ジム運営を効率化するシステムを開発いたします。
								</p>
							</div>
							{/* 継続的な保守・運用サポート */}
							<div
								className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
								data-oid="70fx3ry"
							>
								<div
									className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
									data-oid="qvfinnn"
								>
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										data-oid="1alrp_8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
											data-oid="cvqky73"
										/>
									</svg>
								</div>
								<h3
									className="text-xl font-semibold text-gray-900 mb-2"
									data-oid="nu38sso"
								>
									継続的な保守・運用サポート
								</h3>
								<p className="text-gray-700" data-oid="u4bzvm7">
									一度作って終わりではなく、伴走型での運用支援により、常に最適な状態を維持いたします。
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* 実績・事例セクション */}
				<section id="portfolio" className="py-20" data-oid="e3tuu-1">
					<div className="max-w-7xl mx-auto px-6" data-oid="to1-p5-">
						<h2
							className="text-3xl font-bold text-center text-gray-900 mb-4"
							data-oid="wnuoovq"
						>
							実績・事例
						</h2>
						<p className="text-center text-gray-700 mb-12" data-oid="n86wgqr">
							過去のプロジェクトを通じて、道場運営の課題を解決した事例をご紹介
						</p>
						<div
							className="grid grid-cols-1 md:grid-cols-2 gap-8"
							data-oid="de.2_d7"
						>
							{/* 事例1 */}
							<div
								className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
								data-oid="q3c5b6n"
							>
								<a
									href="https://timetable-hideskick.net/"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
									data-oid="uyba4uo"
								>
									<div
										className="aspect-video overflow-hidden"
										data-oid="imke0fz"
									>
										<Image
											src="/images/hides-timetable.webp"
											alt="体験予約受付システム hides timetable"
											width={600}
											height={400}
											className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
											data-oid="9d:7n90"
										/>
									</div>
									<div className="p-6" data-oid="tqo-em3">
										<h3
											className="text-xl font-semibold text-gray-900 mb-2"
											data-oid="127ljl-"
										>
											体験予約受付システム
											<span
												className="text-sm text-gray-500"
												data-oid="lsj-e07"
											>
												Hide&apos;s Kick様
											</span>
										</h3>
										<p className="text-gray-700" data-oid="t8fjfao">
											オンラインでの体験予約受付システムを開発。タイムテーブルに模した予約フォームを実現。
										</p>
									</div>
								</a>
							</div>
							{/* 事例2 */}
							<div
								className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
								data-oid=":gn6fdg"
							>
								<div
									className="aspect-video overflow-hidden"
									data-oid="h.52-9k"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 600 400"
										className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
										data-oid="yck920w"
									>
										<rect
											width="600"
											height="400"
											fill="#cccccc"
											data-oid="22p28cy"
										/>

										<text
											x="50%"
											y="50%"
											dominantBaseline="middle"
											textAnchor="middle"
											fill="#666666"
											fontSize="24"
											data-oid="34t9055"
										>
											Sample Image
										</text>
									</svg>
								</div>
								<div className="p-6" data-oid="p:knqtp">
									<h3
										className="text-xl font-semibold text-gray-900 mb-2"
										data-oid="i-lyt1j"
									>
										ホームページ制作
										<span className="text-sm text-gray-500" data-oid="m1i30s5">
											HK Studio様
										</span>
									</h3>
									<p className="text-gray-700" data-oid="zq-b7pm">
										オリジナルデザインのホームページ制作。パーソナルジムの雰囲気を活かしたデザインを実現。
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* プロフィールセクション */}
				<section id="profile" className="py-20 bg-gray-50" data-oid="e-ma.5n">
					<div
						className="max-w-4xl mx-auto px-6 text-center"
						data-oid="kess_k2"
					>
						<h2
							className="text-3xl font-bold text-gray-900 mb-4"
							data-oid="ykwo1em"
						>
							プロフィール
						</h2>
						<div
							className="flex flex-col md:flex-row items-center justify-center"
							data-oid="ozxkldb"
						>
							<Image
								src="/images/my_image.webp"
								alt="WEBエンジニア 堀江 遼佑のプロフィール画像"
								width={200}
								height={200}
								className="rounded-full mb-6 md:mb-0 md:mr-8"
								data-oid="t8h44-9"
							/>

							<div className="text-left" data-oid=":6w5g-v">
								<p
									className="text-xl text-gray-900 font-semibold"
									data-oid="e-uoxil"
								>
									WEBエンジニア × 格闘技ジムスタッフ
								</p>
								<p className="text-gray-700 mt-4" data-oid="ttr7wok">
									WEBエンジニアとしての開発経験、さらに格闘技ジムでの現場経験を活かし、ITが苦手な小規模ジムや個人事業オーナーに寄り添ったサポートを提供しています。
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* 料金・プランセクション */}
				<section id="pricing" className="py-20 bg-gray-50" data-oid="c3kdg.-">
					<div className="max-w-5xl mx-auto px-6" data-oid="lif979e">
						<h2
							className="text-3xl font-bold text-center text-gray-900 mb-4"
							data-oid="61fyoqp"
						>
							料金・プラン
						</h2>
						<p className="text-center text-gray-700 mb-12" data-oid="dysi3xm">
							ニーズに合わせてご相談させていただきます。以下は目安となります。
						</p>
						<div
							className="grid grid-cols-1 md:grid-cols-2 gap-8"
							data-oid="k-kvlga"
						>
							<div
								className="p-6 rounded-xl bg-white shadow-md"
								data-oid="9684bk4"
							>
								<h3
									className="text-xl font-semibold text-gray-900 mb-2"
									data-oid="u1hjvcz"
								>
									ホームページ制作
								</h3>
								<p className="text-gray-700 mb-4" data-oid="xd00.82">
									初期費用：¥30,000～
								</p>
								<p className="text-gray-700" data-oid="-s3n8pt">
									内部SEO対策とMEO対策を実施し、集客力の向上をサポートします。
								</p>
							</div>
							<div
								className="p-6 rounded-xl bg-white shadow-md"
								data-oid="m4ypw:b"
							>
								<h3
									className="text-xl font-semibold text-gray-900 mb-2"
									data-oid="440-00a"
								>
									システム開発
								</h3>
								<p className="text-gray-700 mb-4" data-oid="dlfa5rd">
									初期費用：¥100,000～
								</p>
								<p className="text-gray-700" data-oid="17j.s41">
									ご要望に合わせたシステムをスクラッチ開発いたします。プロジェクト規模に合わせて柔軟にお見積りいたします。
								</p>
							</div>
						</div>
						<div className="mt-8 text-center" data-oid="50t_3jl">
							<p className="text-gray-700" data-oid="lnahfct">
								【導入の流れ】 ヒアリング → 要件定義 → デザイン・開発 → 納品 →
								運用・継続サポート
							</p>
						</div>
					</div>
				</section>

				{/* お問い合わせセクション */}
				<section id="contact" className="py-20 bg-gray-100" data-oid="fhsy.6b">
					<div className="max-w-3xl mx-auto px-6" data-oid="-ml:o4.">
						<h2
							className="text-3xl font-bold text-center text-gray-900 mb-4"
							data-oid="fm1jj3w"
						>
							お問い合わせ
						</h2>
						<p className="text-center text-gray-700 mb-12" data-oid="zaul00b">
							お気軽にご連絡ください。ご相談内容に合わせた最適なご提案をいたします。
						</p>
						<form className="space-y-6" data-oid="ba964_g">
							<div data-oid="mxjtcww">
								<label className="block text-gray-800 mb-2" data-oid="8macrw_">
									お名前
								</label>
								<input
									type="text"
									className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
									placeholder="山田 太郎"
									data-oid="wb6el44"
								/>
							</div>
							<div data-oid="6mub.qm">
								<label className="block text-gray-800 mb-2" data-oid="t0g2d3x">
									メールアドレス
								</label>
								<input
									type="email"
									className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
									placeholder="your@email.com"
									data-oid=":zwizvu"
								/>
							</div>
							<div data-oid="rg6go0o">
								<label className="block text-gray-800 mb-2" data-oid="482nd4t">
									お問い合わせ内容
								</label>
								<textarea
									className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300"
									placeholder="ご相談内容をご記入ください"
									data-oid="yxw8lq5"
								/>
							</div>
							<div className="text-center pt-4" data-oid="jbzse2.">
								<button
									type="submit"
									className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
									data-oid="kpyre50"
								>
									送信する
								</button>
							</div>
						</form>
					</div>
				</section>
			</main>

			{/* フッター */}
			<footer className="bg-gray-200 text-gray-700 py-8" data-oid="-ij:mq1">
				<div className="max-w-7xl mx-auto px-6 text-center" data-oid="a8e0v7s">
					<p data-oid="pguj_0_">© 2025 ryosuke horie . All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
