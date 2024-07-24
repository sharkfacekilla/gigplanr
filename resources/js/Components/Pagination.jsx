import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-black dark:text-white text-xs " +
            (link.active ? "bg-blue " : " ") +
            (!link.url
              ? "!text-white/20 dark:text-black/20 cursor-not-allowed "
              : "hover:bg-teal")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};
