import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

import { AnimatedGroup } from "./animated-group";
import { Navbar } from "./navbar";
import { AuthLink } from "../shared/auth-link";
import AnthropicLogo from "@/assets/models/anthropic.svg?react";
import CloudriftLogo from "@/assets/models/cloudrift.svg?react";
import GoogleVertexAILogo from "@/assets/models/google-vertex-ai.svg?react";
import GroqLogo from "@/assets/models/groq.svg?react";
import InferenceNetLogo from "@/assets/models/inference-net.svg?react";
import KlusterAILogo from "@/assets/models/kluster-ai.svg?react";
import MistralLogo from "@/assets/models/mistral.svg?react";
import OpenAILogo from "@/assets/models/openai.svg?react";
import TogetherAILogo from "@/assets/models/together-ai.svg?react";
import XaiLogo from "@/assets/models/xai.svg?react";
import heroImageLight from "@/assets/new-hero-light.png";
import heroImageDark from "@/assets/new-hero.png";
import { Button } from "@/lib/components/button";
import { DOCS_URL } from "@/lib/env";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

// Provider logos configuration
const PROVIDER_LOGOS = [
	{ name: "OpenAI", component: OpenAILogo },
	{ name: "Anthropic", component: AnthropicLogo },
	{ name: "Google Vertex AI", component: GoogleVertexAILogo },
	{ name: "Mistral", component: MistralLogo },
	{ name: "Together AI", component: TogetherAILogo },
	{ name: "Cloudrift", component: CloudriftLogo },
	{ name: "Kluster AI", component: KlusterAILogo },
	{ name: "Inference Net", component: InferenceNetLogo },
	{ name: "Groq", component: GroqLogo },
	{ name: "xAI", component: XaiLogo },
] as const;

export function Hero({ navbarOnly }: { navbarOnly?: boolean }) {
	return (
		<>
			<Navbar />
			{!navbarOnly && (
				<main className="overflow-hidden">
					<div
						aria-hidden
						className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
					>
						<div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
						<div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
						<div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
					</div>
					<section>
						<div className="relative pt-24 md:pt-36">
							<AnimatedGroup
								variants={{
									container: {
										visible: {
											transition: {
												delayChildren: 1,
											},
										},
									},
									item: {
										hidden: {
											opacity: 0,
											y: 20,
										},
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												type: "spring",
												bounce: 0.3,
												duration: 2,
											},
										},
									},
								}}
								className="absolute inset-0 -z-20"
							>
								<img
									src={heroImageDark}
									alt="background"
									className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
									width="3276"
									height="4095"
								/>
								<img
									src={heroImageLight}
									alt="background"
									className="absolute inset-x-0 top-56 -z-20 block lg:top-32 dark:hidden"
									width="3276"
									height="4095"
								/>
							</AnimatedGroup>
							<div
								aria-hidden
								className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
							/>
							<div className="mx-auto max-w-7xl px-6">
								<div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
									<AnimatedGroup variants={transitionVariants}>
										<a
											href="https://github.com/theopenco/llmgateway"
											target="_blank"
											className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
										>
											<span className="text-foreground text-sm">
												LLM Gateway is fully open source
											</span>
											<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />

											<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
												<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
												</div>
											</div>
										</a>

										<h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
											One API Gateway for All Your LLM Needs
										</h1>
										<p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
											Route, manage, and analyze your LLM requests across
											multiple providers with a unified API interface.
										</p>
									</AnimatedGroup>

									<AnimatedGroup
										variants={{
											container: {
												visible: {
													transition: {
														staggerChildren: 0.05,
														delayChildren: 0.75,
													},
												},
											},
											...transitionVariants,
										}}
										className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
									>
										<div
											key={1}
											className="bg-foreground/10 rounded-[14px] border p-0.5"
										>
											<Button
												asChild
												size="lg"
												className="rounded-xl px-5 text-base"
											>
												<AuthLink>
													<span className="text-nowrap">Start Building</span>
												</AuthLink>
											</Button>
										</div>
										<Button
											key={2}
											asChild
											size="lg"
											variant="ghost"
											className="h-10.5 rounded-xl px-5"
										>
											<a href={DOCS_URL} target="_blank">
												<span className="text-nowrap">View Documentation</span>
											</a>
										</Button>
									</AnimatedGroup>
								</div>
							</div>

							<AnimatedGroup
								variants={{
									container: {
										visible: {
											transition: {
												staggerChildren: 0.05,
												delayChildren: 0.75,
											},
										},
									},
									...transitionVariants,
								}}
							>
								<div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
									<div
										aria-hidden
										className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
									/>
									<div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
										<img
											className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
											src={heroImageDark}
											alt="app screen"
											width="2696"
											height="1386"
										/>
										<img
											className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
											src={heroImageLight}
											alt="app screen"
											width="2696"
											height="1386"
										/>
									</div>
								</div>
							</AnimatedGroup>
						</div>
					</section>
					<section className="bg-background pb-16 pt-16 md:pb-32">
						<div className="group relative m-auto max-w-5xl px-6">
							<div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
								<Link
									to="/models"
									className="block text-sm duration-150 hover:opacity-75"
								>
									<span>View All Providers</span>
									<ChevronRight className="ml-1 inline-block size-3" />
								</Link>
							</div>
							<div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-5 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
								{PROVIDER_LOGOS.map((provider) => {
									const LogoComponent = provider.component;
									return (
										<div key={provider.name} className="flex">
											<LogoComponent className="mx-auto h-16 w-fit" />
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
}
