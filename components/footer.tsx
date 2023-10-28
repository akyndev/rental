import { plusJakartaSans } from "@/app/fonts"
import React from "react"
import { Separator } from "@/components/ui/separator"
import { Copyright } from "lucide-react"

const nav = [
	{
		title: "about",
		links: [
			["How it works", "how-it-works"],
			["Featured", "featured"],
			["Partnership", "partnership"],
			["Bussiness Relation", "bussiness-relation"],
		],
	},
	{
		title: "categories",
		links: [
			["event", "how-it-works"],
			["blog", "featured"],
			["podcast", "partnership"],
			["invite a friend", "bussiness-relation"],
		],
	},
	{
		title: "social",
		links: [
			["discord", "how-it-works"],
			["instagram", "featured"],
			["x", "partnership"],
			["facebook", "bussiness-relation"],
		],
	},
]

const Footer = () => {
	return (
		<div className="py-12">
			<div className="container">
				<div className="flex flex-col lg:flex-row items-start sapce-x-10 lg:py-4">
					<div className="w-full">
						<h2
							className={` ${plusJakartaSans.className} mb-6 uppercase font-bold text-3xl text-[#3563E9]`}>
							akrent
						</h2>
						<p className="lg:w-72 opacity-50">
							Our vision is to provide convenience and help increase your sales
							business.
						</p>
					</div>
					<div className="w-full my-10 lg:my-0 grid grid-cols-2 lg:grid-cols-3 gap-10 place-content-between capitalize">
						{nav.map((o, i) => (
							<div key={i}>
								<h3 className="font-semibold cursor-pointer text-lg  pb-6">
									{o.title}
								</h3>
								<div className="space-y-4">
									{o.links.map((a, j) => (
										<h4 className="opacity-50 cursor-pointer font-medium" key={j}>{a[0]}</h4>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-8"/>

				<div className="flex flex-col-reverse lg:flex-row lg:space-y-0 items-center justify-between font-semibold">
					<div className="flex items-center w-full text-xs lg:text-base mt-4 lg:mt-0 text-center">
						<Copyright size={16} /> {" "}
						{new Date().getFullYear()} {" "}
						AKRENT. All Right Reserved
					</div>
					<div className="flex items-center w-full justify-between text-xs lg:text-base lg:justify-center lg:space-x-12">
						<span>Privacy & Policy</span>
						<span>Terms & Conditions</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
