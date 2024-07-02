import Link from "next/link";
import Image from "next/image";
import profile from "../images/Avatar.png";
import { ChevronsUpDown } from "lucide-react";

import {
	
	Home,
	LineChart,

	Package,

	ShoppingCart,
	Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import apexIcon from "../images/Apex.svg";
import databaseIcon from "../images/database.svg";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComboboxDemo } from "./Combobox";
import DashboardIcon from "../images/dashboard.svg";
import JournalIcon from "../images/journal.svg";
import ArrowIcon from "../images/arrow.svg";
import MergeIcon from "../images/merge.svg";
import DownArrowIcon from "../images/arrow-big-down-dash.svg";
import TransactionIcon from "../images/transaction.svg";
import WalletIcon from "../images/wallet.svg";
export function Sidebar() {
	return (
		<div
			className="hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[225px_1fr] min-h-screen"
			style={{ backgroundColor: "#FAFAFA" }}
		>
			<div className="border-r bg-subtle">
				<div className="flex h-full max-h-screen flex-col">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 gap-3">
						<div className="avatar rounded-full flex items-center justify-around gap-8">
							<div className="flex items-center gap-2">
								<Image src={profile} alt="user-pics" width={25} height={25} />
								<p className="lg:text-[14px] md:text-[10px] text-muted-foreground text-[12px]">
									Henry Nnalue
								</p>
							</div>
							<div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<ChevronsUpDown className="h-4 w-3 shrink-0" />
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>My Account</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Settings</DropdownMenuItem>
										<DropdownMenuItem>Support</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Logout</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								href="/"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image
									src={DashboardIcon}
									alt="dashboard"
									className="h-4 w-4"
								/>
								Dashboard
							</Link>
							<Link
								href="/dashboard/wallet"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image src={WalletIcon} alt="wallet" className="h-4 w-4" />
								Wallet
								{/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
									6
								</Badge> */}
							</Link>
							<Link
								href="/dashboard/transactions"
								className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
							>
								<Image
									src={TransactionIcon}
									alt="transaction"
									className="h-4 w-4"
								/>
								P2P Transactions
							</Link>
							<Link
								href="/dashboard/reversals"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image src={MergeIcon} alt="reverasls" className="h-4 w-4" />
								Reversals
							</Link>
							<Link
								href="/dashboard/wallet-funding"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image
									src={DownArrowIcon}
									alt="wallet funding"
									className="h-4 w-4"
								/>
								Wallet funding
							</Link>
							<Link
								href="/dashboard/outflow-transfer"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image
									src={ArrowIcon}
									alt="outflow transfer"
									className="h-4 w-4"
								/>
								Outflow transfers
							</Link>
							<Link
								href="/dashboard/journal-entries"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Image
									src={JournalIcon}
									alt="journal entries"
									className="h-4 w-4"
								/>
								Journal entries
							</Link>
						</nav>
					</div>
					<div className="mt-auto lg:w-[220.8px] md:w-[220px] w-[220px] h-[70px] px-2 py-1.5 flex items-center justify-between border-r border-t-0 border-b-0 border-l-0 bg-white">
						<div className="icon relative flex items-center justify-center">
							<Image src={apexIcon} alt="icon" className="w-full h-full" />
							<Image
								src={databaseIcon}
								alt="icon"
								className="absolute w-5 h-4"
							/>
						</div>
						<div className="text flex flex-col leading-[20px]">
							<p className="ledger-text lg:text-[12px] md:text-[8px] text-[px] font-bold text-[#0E121B]">
								Ledger
							</p>
							<p className="admin-text lg:text-[12px] md:text-[8px] text-[6px] text-[#525866]">
								Admin Dashboard
							</p>
						</div>
						<div className="combo">
							<ComboboxDemo />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
          </div>
          Page content
        </main>
      </div> */}
		</div>
	);
}