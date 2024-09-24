import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-white shadow-sm border-neutral-200 p-4">
        <div className="space-y-6 text-gray-600">
          <div className="space-y-2">
            <p className="font-bold break-keep">
              콩고물과 우유가 들어간 빙수는 차게 먹어야 특별한 맛이 잘 표현된다.
            </p>
            <p className="break-keep">
              콩고물과 우유가 들어간 빙수는 차게 먹어야 특별한 맛이 잘 표현된다.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-bold">
              Grumpy wizards make toxic brew for the evil Queen and Jack.
            </p>
            <p>
              Grumpy wizards make toxic brew for the evil Queen and Jack.
            </p>
          </div>

          <div className="code space-y-2 p-2 border border-neutral-300 rounded-md bg-neutral-50">
            <pre>
              <code>
              function helloWorld() &#123;<br/>   console.log("Hello, World!"); <br/>&#125;
              </code>
            </pre>
          </div>

          <p className="break-words">
            ❤ ♫ ☎ • ° ♨ ✈ ✣ ☏ ■ ☀ ➑ ✂ ☑ ✉ ☼ ☆ ✄ ✔ ✆ — ☁ ★ ♕ ✘ № ‰ ♠ ✪ ✝ ╳ © … ♥ ✰ † ✎ ® ¶ ♦ ✧ ‡ ✍ ™ ❆ ♣ ✦ ◑ ♀ ℮ ❅ ♤ ♡ ♪ ♂
          </p>
        </div>
      </div>
    </div>
  );
}
