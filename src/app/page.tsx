"use client";
import React, { useState } from "react";
import circle from "../images/circle.png";
import Person from "../images/person.svg";
import Image from "next/image";

const Page = () => {
	const [data, setData] = useState(false);

	return (
		<div className="flex justify-center">
			<div className="w-full max-w-7xl p-6 mt-3 ">
				{!data ? (
					<div
						className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm w-full h-[462px] bg-white"
						style={{
							height: "462px",
							borderRadius: "5px",
							borderColor: "#dadada",
						}}
					>
						<div className="flex flex-col items-center gap-0 text-center mt-[-160px]">
							<div className="empty-icons">
								<div className="flex items-center justify-center ">
									<div className="relative">
										<Image src={circle} alt="empty pos" />
										<div className="absolute inset-0 flex items-center justify-center">
											<Image src={Person} alt="person" />
										</div>
									</div>
								</div>
							</div>
							<div className="no-data leading-[32px]">
								<p className="first-text text-[15px] font-semibold text-[#3F3F46]">
									No POS terminals assigned yet
								</p>
								<p className="second-text leading-[20px] text-[13px] text-[#71717A]">
									All assigned POS terminals will appear here. Go <br />
									and assign one
								</p>
							</div>
						</div>
					</div>
				) : (
					<p>Data is available</p>
				)}
			</div>
		</div>
	);
};

export default Page;
