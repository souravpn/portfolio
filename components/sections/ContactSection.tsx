"use client";

import { useState, useRef } from "react";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
];
const MAX_SIZE_MB = 5;
const MAX_FILES = 5;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactSection() {
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const valid = Array.from(incoming).filter(
      (f) =>
        ALLOWED_TYPES.includes(f.type) && f.size <= MAX_SIZE_MB * 1024 * 1024,
    );
    setAttachments((prev) => [...prev, ...valid].slice(0, MAX_FILES));
  };

  const removeAttachment = (index: number) =>
    setAttachments((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    attachments.forEach((f) => data.append("attachments", f));
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setFormState("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setAttachments([]);
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-white-950/20 dark:bg-zinc-950/20"
    >
      <div className="flex flex-col items-center mb-26">
        <div className="w-fit flex flex-col items-center gap-6">
          <h2 className="text-5xl font-bold tracking-tight text-blue-500">
            Get in Touch
          </h2>
          <div className="w-3/5 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Info */}
          <div>
            <p className="text-lg md:text-lg mb-10 text-zinc-600 dark:text-zinc-300">
              I’m based in the beautiful San Francisco Bay Area and always happy
              to connect.
              <br />
              <br />
              Love collaborating on cool projects, brainstorming fresh ideas, or
              simply grabbing a virtual coffee to chat.
              <br />
              <br />
              Drop me a message and say hello — I’d love to hear from you!{" "}
              <br />
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-500 dark:text-blue-400">
                    souravpn1985@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  ☕
                </div>
                <div>
                  <p className="font-medium">Book a 30 mins call</p>
                  <p className="text-blue-500 dark:text-blue-400">
                    <a
                      href="https://calendly.com/souravnayak/30min"
                      target="_blank"
                    >
                      https://calendly.com/souravnayak/30min
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    San Francisco Bay Area, CA (Remote Available)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleFormChange}
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleFormChange}
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleFormChange}
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleFormChange}
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-3xl px-6 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400"
              />

              {/* Attachments */}
              <div className="space-y-3">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Attach files"
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) =>
                    e.key === "Enter" && fileInputRef.current?.click()
                  }
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    addFiles(e.dataTransfer.files);
                  }}
                  className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-7 cursor-pointer transition-colors ${
                    isDragging
                      ? "border-blue-400 bg-blue-50 dark:bg-blue-950/30"
                      : "border-zinc-300 dark:border-zinc-700 hover:border-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 16v-8m0 0-3 3m3-3 3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
                    />
                  </svg>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    <span className="font-medium text-blue-500">
                      Click to browse
                    </span>{" "}
                    or drag &amp; drop files here
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    PDF, DOC, DOCX, JPG, PNG, WEBP · max {MAX_SIZE_MB} MB each ·
                    up to {MAX_FILES} files
                  </p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                  className="hidden"
                  onChange={(e) => addFiles(e.target.files)}
                />

                {attachments.length > 0 && (
                  <ul className="space-y-2">
                    {attachments.map((file, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5"
                      >
                        <span className="text-xs font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 shrink-0">
                          {file.name.split(".").pop()}
                        </span>
                        <span className="flex-1 text-sm truncate text-zinc-700 dark:text-zinc-300">
                          {file.name}
                        </span>
                        <span className="text-xs text-zinc-400 shrink-0">
                          {formatBytes(file.size)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeAttachment(i)}
                          aria-label={`Remove ${file.name}`}
                          className="shrink-0 text-zinc-400 hover:text-red-500 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {attachments.length >= MAX_FILES && (
                  <p className="text-xs text-amber-500 dark:text-amber-400">
                    Maximum {MAX_FILES} files reached.
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formState === "sending" || formState === "sent"}
                  className="w-[60%] py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-60 disabled:pointer-events-none text-white rounded-xl font-medium text-base transition"
                >
                  {formState === "sending"
                    ? "Sending…"
                    : formState === "sent"
                      ? "Sent ✓"
                      : "Send Message"}
                </button>
              </div>

              {formState === "error" && (
                <p className="text-center text-sm text-red-500">
                  Something went wrong — please try again.
                </p>
              )}
              {formState === "sent" && (
                <p className="text-center text-sm text-blue-500">
                  Message delivered! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
