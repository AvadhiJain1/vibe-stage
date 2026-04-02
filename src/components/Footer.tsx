const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-heading font-bold gradient-text text-lg">NOVAFEST</span>
      <p>© 2026 NOVAFEST. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <a href="#" className="hover:text-primary transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
