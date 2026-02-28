import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginPage from "@/components/Login";

export default async function Page() {
    const cookieStore = await cookies();
    const sid = cookieStore.get("sid");

    // belum login
    if (!sid?.value) {
        return <LoginPage />;
    }

    // cek SID valid di ERPNext
    try {
        const res = await fetch(
            "https://app.athena-erp.cloud/api/method/frappe.auth.get_logged_user",
            { headers: { Cookie: `sid=${sid.value}` } }
        );

        if (res.ok) redirect("https://app.athena-erp.cloud/app/home");
    } catch (err) {
        console.error(err);
    }

    // SID invalid → tampilkan login
    return <LoginPage />;
}