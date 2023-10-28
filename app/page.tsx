"use client"

import Ads from "@/components/ads"
import Card from "@/components/card"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import img from "public/adImage1.png"
import img1 from "public/adImage2.png"

export default function Home() {
	const { setTheme } = useTheme()

	return (
		<div className="bg-[#F6F7F9] dark:bg-gray-700 py-10">
			<div className="container">
				<div className="flex items-center lg:space-x-8">
					<Ads
						title="The Best Platform for Car Rental"
						text="Ease of doing a car rental safely and reliably. Of course at a low price."
						color="#54A6FF"
						img={img}
						btnColor="#3563E9"
					/>
					<Ads
						className="hidden lg:block"
						title="Easy way to rent a car at a low price"
						text="Providing cheap car rental services and safe and comfortable facilities."
						color="#3563E9"
						img={img1}
						btnColor="#54A6FF"
					/>
				</div>

				<div className="mt-20 space-y-4">
					<div className="flex items-center justify-between">
						<h4 className="pl-4 opacity-50 font-bold">Popular</h4>

						<Button
							variant="ghost"
							className="text-[#3563E9] hover:text-[#3563e9]/80 font-semibold">
							View All
						</Button>
					</div>

					<div className="flex items-center justify-between overflow-auto py-2 space-x-8">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>

				<div className="mt-20 space-y-4 w-full">
					<div className="flex items-center justify-between">
						<h4 className="pl-4 opacity-50 font-bold">Recommendation Car</h4>

						<Button
							variant="ghost"
							className="text-[#3563E9] hover:text-[#3563e9]/80 font-semibold">
							View All
						</Button>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>

					<div className="w-full flex items-center py-8">
						<Button className="mx-auto">Show me more</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
