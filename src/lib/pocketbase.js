import PocketBase from "pocketbase"

// Create a singleton PocketBase instance
const pb = new PocketBase("https://icasem-robotechsummit.pockethost.io")

// Disable auto cancellation for server-side requests
pb.autoCancellation(false)

export default pb

// Type definitions for better type safety


// Utility function to fetch timeline data with error handling
export async function fetchTimelineData() {
  try {
    const records = await pb.collection("ICAIR_dates").getFullList({
      sort: "created",
      
      // Add any additional filters if needed
      // filter: 'status = "active"',
    })

    // Validate and sanitize data
    return records.filter((record) => record.title && record.date && record.description)
  } catch (error) {
    console.error("PocketBase fetch error:", error)
    throw new Error("Failed to fetch timeline data")
  }
}

// Function to fetch a single timeline item
export async function fetchTimelineItem(id) {
  try {
    const record = await pb.collection("ICAIR_dates").getOne(id)
    return record
  } catch (error) {
    console.error("Failed to fetch timeline item:", error)
    return null
  }
}
