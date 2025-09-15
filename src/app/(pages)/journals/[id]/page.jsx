import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getJournalById } from "@/lib/pocketbase"
import { ArrowLeft } from "lucide-react"
import PaperSubmissionForm from "./components/Form"

export const dynamic = "force-dynamic"

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  try {
    const journal = await getJournalById(params.id)
    
    if (!journal) {
      return {
        title: "Journal Not Found | RobotechSummit",
        description: "The requested journal could not be found.",
      }
    }

    const journalTitle = journal.title || "Untitled Journal"
    const journalDescription = journal.description || `Submit your research paper to ${journalTitle}. Explore publication opportunities and submission guidelines for this academic journal.`
    
    // Generate image URL if available
    const journalImageUrl = journal.imgs 
      ? `https://zep-research.pockethost.io/api/files/Journals/${journal.id}/${journal.imgs}`
      : journal.img || "https://robotechsummit.com/opengraph.png"

    const pageUrl = `https://robotechsummit.com/journals/${params.id}`

    return {
      title: `${journalTitle} | RobotechSummit Journal Publications`,
      description: journalDescription,
      keywords: [
        journalTitle.toLowerCase(),
        "research journal",
        "academic publication",
        "RobotechSummit 2025",
        "AI research",
        "robotics journal",
        "paper submission",
        "peer review",
        ...(journal.issncode ? [`ISSN ${journal.issncode}`] : [])
      ],

      // Open Graph / Facebook
      openGraph: {
        type: "website",
        url: pageUrl,
        title: `${journalTitle} | RobotechSummit Journal Publications`,
        description: journalDescription,
        siteName: "RobotechSummit",
        images: [
          {
            url: journalImageUrl,
            width: 1200,
            height: 630,
            alt: `${journalTitle} - Research Journal`,
          },
        ],
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: `${journalTitle} | RobotechSummit Journal Publications`,
        description: journalDescription,
        images: [journalImageUrl],
      },

      // Canonical URL
      alternates: {
        canonical: pageUrl,
      },

      // Structured Data
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${journalTitle} | RobotechSummit Journal Publications`,
          description: journalDescription,
          url: pageUrl,
          mainEntity: {
            "@type": "Periodical",
            name: journalTitle,
            description: journalDescription,
            url: pageUrl,
            ...(journal.issncode && { issn: journal.issncode }),
            publisher: {
              "@type": "Organization",
              name: "RobotechSummit",
              url: "https://robotechsummit.com"
            },
            ...(journal.created && {
              dateCreated: journal.created,
            }),
            ...(journal.updated && {
              dateModified: journal.updated,
            })
          },
        }),
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Journal | RobotechSummit",
      description: "Explore journal publication opportunities with RobotechSummit.",
    }
  }
}

export default async function JournalDetailPage({ params }) {
  const resolvedParams = await params
  const journal = await getJournalById(resolvedParams.id)

  if (!journal) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <Link href="/journals">
        <Button variant="ghost" className="mb-8 group hover:bg-transparent">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Journals
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Journal Details - Left Side */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {journal.title || "Untitled Journal"}
          </h1>

          <div className="relative h-96  w-full overflow-hidden ">
            {journal.imgs ? (
              <Image
                src={`https://zep-research.pockethost.io/api/files/Journals/${journal.id}/${journal.imgs}`}
                alt={journal.title || "Journal cover"}
                fill
                className="object-contain"
                priority
              />
            ) : journal.img ? (
              <Image
                src={journal.img || "/placeholder.svg"}
                alt={journal.title || "Journal cover"}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>

          {journal.issncode && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">ISSN Code</h2>
              <p className="px-4 py-2 bg-gray-50 rounded-md font-mono text-gray-700">{journal.issncode}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {/* <div>
              <h2 className="text-lg font-semibold mb-2">Created</h2>
              <p className="px-4 py-2 bg-gray-50 rounded-md text-gray-700">
                {new Date(journal.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Last Updated</h2>
              <p className="px-4 py-2 bg-gray-50 rounded-md text-gray-700">
                {new Date(journal.updated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div> */}
          </div>
        </div>

        {/* Submission Form - Right Side */}
        <div>
          <PaperSubmissionForm journalId={journal.id} journalTitle={journal.title || "Untitled Journal"} />
        </div>
      </div>
    </div>
  )
}