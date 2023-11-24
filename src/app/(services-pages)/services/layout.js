import "../../globals.css";
import ServiceFoot from "./Base/ServiceFoot";
import ServiceHead from "./Base/ServiceHead";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ServicesLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServiceHead />
        <div className="my-8">{children}</div>
        <ServiceFoot />
      </body>
    </html>
  );
}
