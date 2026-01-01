import { NextResponse } from "next/server"
import { mailer } from "@/lib/mailer"
import { sanitize } from "@/lib/sanitize"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = sanitize(body.name || "")
    const phone = sanitize(body.phone || "")
    const email = sanitize(body.email || "")
    const propertyType = sanitize(body.propertyType || "")
    const requirements = sanitize(body.requirements || "")

    if (!name || !phone || !email || !propertyType) {
      return NextResponse.json(
        { message: "Invalid input" },
        { status: 400 }
      )
    }

    await mailer.sendMail({
        from: `"Zarket Smart Homes Enquiries" <enquirieszarket@gmail.com>`,
        to: "dileep@zarteksmarthomes.com",
        replyTo: email, // user’s email
        subject: "🚨 New Website Enquiry",
        html: `
            <h2>New Enquiry Received</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Property Type:</b> ${propertyType}</p>
            <p><b>Requirements:</b> ${requirements || "—"}</p>
        `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[CONTACT_API_ERROR]", err)
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}
