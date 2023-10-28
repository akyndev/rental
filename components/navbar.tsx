import React from "react"
import { Input } from "@/components/ui/input"
import { plusJakartaSans } from "@/app/fonts"
import { Search, Heart, Bell, Settings, Settings2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
	return (
		<div className="container">
			<nav className="flex items-center justify-between py-6">
				<div className="flex items-center space-x-20">
					<div>
						<p
							className={` ${plusJakartaSans.className} uppercase font-bold text-3xl text-[#3563E9]`}>
							akrent
						</p>
					</div>

					<div className="hidden lg:flex items-center border rounded-full px-2">
						<span className="px-2 opacity-70 cursor-pointer">
							<Search color="#596780" />
						</span>
						<Input
							type="search"
							placeholder="Search something here"
							className="border-none w-96 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#828994] focus-visible::border-none acitve:border-none active:outline-none"
						/>
						<span className="px-2 opacity-70 cursor-pointer">
							<Settings2 color="#596780" />
						</span>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<div className="hidden lg:flex items-center space-x-4">
						<span className="opacity-70  p-2 border rounded-full ">
							<Heart fill="#596780" color="#596780" />
						</span>
						<span className="opacity-70  p-2 border rounded-full ">
							<Bell fill="#596780" color="#596780" />
						</span>
						<span className="opacity-70 flex items-center justify-center p-2 border rounded-full relative">
							<span className="bg-white rounded-full p-[3px] absolute top-50 left-50 -translate-x-50 -translate-y-50"></span>
							<Settings fill="#596780" color="#596780" />
						</span>
					</div>

					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>AN</AvatarFallback>
					</Avatar>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
