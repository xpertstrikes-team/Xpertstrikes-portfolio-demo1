const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">
          Xpertstrikes Portfolio
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
