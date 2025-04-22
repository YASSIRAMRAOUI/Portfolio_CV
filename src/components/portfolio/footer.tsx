
export function Footer() {
  return (
    <footer className="py-6 border-t border-portfolio-200 text-center text-sm text-portfolio-600 dark:border-portfolio-700 dark:text-portfolio-400">
      <p>
        © {new Date().getFullYear()} - 
        <a
          href="/Portfolio/index.html"
          className="text-portfolio-500 hover:underline"
        >
          - Portfolio de Yassir Amraoui
        </a>
      </p>
    </footer>
  );
}
