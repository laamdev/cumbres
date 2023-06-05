"use client"

import React from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { AiOutlineCrown } from "react-icons/ai"

const ToggleSummit = ({
  toggleSummit,
  setToggleSummit,
}: {
  toggleSummit: boolean
  setToggleSummit: (value: boolean) => void
}) => (
  <Toggle.Root
    onClick={() => setToggleSummit(!toggleSummit)}
    defaultPressed={true}
    aria-label="Toggle italic"
    className="color-green11 shadow-blackA7 hover:bg-violet3 data-[state=on]:bg-green6 data-[state=on]:text-green12 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black"
  >
    <AiOutlineCrown />
  </Toggle.Root>
)

export default ToggleSummit
