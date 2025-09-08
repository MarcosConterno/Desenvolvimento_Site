// pages/api/associese.js
import { supabaseAdmin } from "/pages/lib/supabaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const payload = req.body || {};

    // Validação simples (pode sofisticar com zod/yup)
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const message = String(payload.message || "").trim();
    const role = String(payload.role || "").trim(); // "medico" | "paciente"
    const consent = Boolean(payload.consent);
    const page_url = String(payload._page || "");

    if (!name || !email || !phone || !message || !role) {
      return res.status(400).json({ ok: false, error: "Campos obrigatórios faltando." });
    }
    if (!["medico", "paciente"].includes(role)) {
      return res.status(400).json({ ok: false, error: "Role inválido." });
    }

    // normaliza telefone (opcional)
    const normalizedPhone = phone.replace(/[^\d]/g, "");

    // insere
    const { data, error } = await supabaseAdmin
      .from("associese_messages")
      .insert({
        name,
        email,
        phone: normalizedPhone,
        message,
        role,
        consent,
        page_url,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ ok: false, error: "Erro ao salvar no Supabase." });
    }

    return res.status(200).json({ ok: true, data });
  } catch (err) {
    console.error("API /associese error:", err);
    return res.status(500).json({ ok: false, error: "Erro interno." });
  }
}
