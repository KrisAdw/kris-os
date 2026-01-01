'use client'
import { Download } from "lucide-react"
import dynamic from "next/dynamic";
import { WindowControls } from "../components"
import WindowWrapper from "../components/hoc/WindowWrapper"

const ResumeViewer = dynamic(() => import("../components/ResumeViewer"), {
  ssr: false,
  loading: () => <div className="p-10 text-center">Loading Resume...</div>
});

const Resume = () => {
  const resumePath = "/files/resume.pdf"
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a href={resumePath} className="cursor-pointer" download title="Resume.pdf">
          <Download className="icon" />
        </a>
      </div>
      <ResumeViewer file={resumePath} />
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume")

export default ResumeWindow