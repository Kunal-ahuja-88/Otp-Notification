import OtpLogin from "@/components/OtpLogin";


export default function Home() {
  return (
    <main className="text-center">
      <h1 className="font-bold text-center mb-5">
         Learning One Time Password using Firebase
      </h1>
      <OtpLogin />
    </main>
  );
}
