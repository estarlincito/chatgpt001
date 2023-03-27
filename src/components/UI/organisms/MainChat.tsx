"use client";
import clsx from "clsx";
import { useAppContext } from "@/context";
import { ChatCard, ChatCardLoadding } from "@UI/molecules";
import { useEffect, useRef } from "react";

const MainChat = () => {
  const { chats, collapse, handleFalse } = useAppContext();
  const devRef = useRef<HTMLDivElement>(null);

  //to scroll down
  useEffect(() => {
    devRef.current?.scrollTo({
      top: devRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  return (
    <div
      onClick={handleFalse}
      ref={devRef}
      className={clsx("bg-primary p-5 h-[82%] overflow-auto", {
        "opacity-60": collapse === true,
      })}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eius
      aliquid nesciunt iste, odio sed ipsam ut quidem aperiam sit. Accusantium
      qui vero nulla quas officia perferendis aut quibusdam debitis aliquam,
      quaerat ipsam explicabo praesentium nam voluptas architecto facere
      laboriosam tempore corporis accusamus. Blanditiis tenetur dolorem dolores
      id. Expedita dignissimos dolores modi placeat, culpa quis in neque quo
      quia possimus officiis, nulla optio iste vel adipisci? Expedita,
      laboriosam doloribus ducimus debitis minus totam eos facere aliquid
      provident id quod nulla assumenda. Ab quaerat commodi repellat, ut dolorem
      eaque corporis id veritatis aspernatur debitis neque perferendis
      doloremque omnis vitae maiores aliquid fugit libero exercitationem. Cumque
      cupiditate itaque excepturi quaerat iure in, autem vero corrupti
      accusantium quia rem sint officia enim totam? Ratione provident placeat
      molestiae, ad labore maiores fugit pariatur cumque cupiditate! Dolores
      minima necessitatibus nulla explicabo molestias, quo animi laboriosam
      asperiores veritatis sit qui voluptatem blanditiis possimus sunt. Nobis
      possimus ratione voluptatum eos quo ut ipsum minima eveniet nam molestiae
      laudantium minus explicabo optio deserunt deleniti aliquid accusantium
      perferendis impedit, voluptas, sequi officia dolorum voluptatibus.
      Reiciendis aliquam minima quaerat officiis dolorem recusandae ratione quae
      dicta amet dignissimos consectetur iste tempora enim perferendis vel,
      deleniti repudiandae commodi quis. Unde rerum in, reiciendis, quae ipsum,
      eos laudantium libero quaerat aliquam deserunt consectetur modi sed minima
      odit neque similique molestiae at? Quaerat nemo laboriosam nam quia nobis
      non quae deleniti natus vel saepe? Similique placeat minima laboriosam
      voluptas eius voluptatum aspernatur itaque excepturi ad, rem sapiente.
      Quam excepturi nihil sunt dolore, quidem vitae asperiores, provident
      corrupti nemo fugit blanditiis pariatur harum dicta aspernatur
      consequuntur inventore aut totam eius. Delectus expedita nobis facere,
      cumque natus saepe, doloribus accusantium vel aut labore assumenda, quasi
      laudantium recusandae autem cum? Tempora eius voluptates sapiente illum
      vel! Illo facilis necessitatibus, nisi placeat vitae alias exercitationem
      totam dolor voluptatibus nulla delectus recusandae praesentium
      perspiciatis maiores cupiditate est iste id vel ut molestias? Assumenda
      pariatur aperiam fugiat vel veritatis, quod aut omnis fuga suscipit nemo
      sapiente, necessitatibus odit eaque saepe soluta impedit, quis et itaque
      quaerat quo nisi esse facilis natus id? Blanditiis ducimus eum autem
      maiores fuga error aut magni harum aliquam quibusdam hic nam facilis
      cumque alias quidem doloribus asperiores quisquam, accusantium dolor sed
      quis enim ab? Quidem reprehenderit id reiciendis. Quidem perspiciatis
      dolor maiores dicta labore, esse ullam? Ipsa tenetur a quaerat architecto
      repellendus ducimus, assumenda saepe, numquam sed consectetur alias optio
      animi, quam officiis eius necessitatibus soluta modi expedita magni quae
      vero porro? Aspernatur repellat esse molestias laudantium voluptatem
      expedita aperiam nobis in ut blanditiis tempora quisquam, numquam harum
      fugiat unde nihil sint ullam consequatur. Incidunt dolore similique ipsum
      maiores perferendis et, ducimus quibusdam vitae voluptates debitis,
      voluptatum tempore eaque! Commodi sunt earum fuga sequi perspiciatis
      repudiandae molestiae veniam tenetur ducimus esse nesciunt itaque, sit,
      delectus ut neque illo praesentium reiciendis optio est. Aut illo velit
      architecto laudantium. Temporibus sequi necessitatibus porro repudiandae
      reiciendis voluptate inventore ipsa amet reprehenderit velit similique,
      hic mollitia sit voluptatem maxime ratione sapiente vero! Architecto omnis
      ad blanditiis accusamus nulla exercitationem, assumenda nihil libero natus
      vitae reiciendis ratione, vel sint ullam! Explicabo pariatur id ullam
      suscipit. Voluptates reiciendis fugit placeat doloribus amet, ex nulla
      laboriosam ratione maxime saepe ipsa maiores ea omnis quasi veniam sint
      beatae odit fugiat cupiditate. Commodi quae iste dolores numquam
      voluptates magnam officia, molestias aliquam ea enim, deserunt earum
      eligendi doloremque labore recusandae iusto voluptatibus corporis amet
      fugiat quibusdam? Nemo ut quis quia dolorum ducimus quo autem veritatis
      doloremque quas? Modi ex ea inventore veritatis, atque explicabo, delectus
      aspernatur cumque veniam nihil impedit sequi obcaecati, doloribus placeat
      cum rerum. Provident eos, vel quod excepturi ipsam non commodi quo minus!
      Fugit omnis excepturi dolorem nesciunt laudantium minus neque sapiente
      quos, iure adipisci nobis natus impedit! Commodi impedit facilis
      asperiores voluptate inventore voluptatem enim quis ut placeat modi
      itaque, amet, est nisi necessitatibus illum quo. Perspiciatis hic, labore
      cum incidunt illum, quos obcaecati eaque, quidem beatae harum optio. Neque
      voluptatem eveniet repudiandae modi, natus praesentium, eos harum quia
      aspernatur culpa cum quis fugit corrupti esse est fuga! Non ex libero
      laborum nesciunt earum est placeat fugit ducimus nobis quasi! Inventore,
      perferendis, rem id earum esse ducimus tempore quam facilis asperiores sit
      placeat aut quaerat qui iusto praesentium voluptatum neque laboriosam et
      delectus. Quos repellendus, placeat laudantium iste expedita earum dolores
      ipsum enim voluptatum sint delectus aut possimus quidem quas cum ullam.
      Aspernatur dolorem, voluptatibus at reiciendis ex modi eaque laudantium
      quaerat odio ea maiores ullam vel possimus alias. Ullam voluptates
      exercitationem voluptatibus sint saepe? Quo fuga blanditiis est
      repellendus mollitia ab molestias eos modi dolores fugiat minima facere
      eaque quia, veritatis corporis vitae provident sed, quis labore?
      Architecto optio deserunt libero eum tempora velit odit sequi, quaerat
      voluptas vel nesciunt a corrupti sapiente iure magnam ea reiciendis
      blanditiis quas qui iusto sunt dolore pariatur impedit illo? Quidem
      perspiciatis, repudiandae iure eum minus deleniti obcaecati voluptate
      asperiores aliquam quia delectus itaque. Veritatis ab maiores vitae,
      error, ipsa, rem in reiciendis aut repellendus ex ullam libero adipisci
      harum beatae esse nemo mollitia deleniti! Harum mollitia quas reiciendis?
      Dolore ex sint ipsum. Quibusdam reiciendis eaque sit facilis deserunt
      dignissimos non reprehenderit ullam nam, error cum minima voluptate quidem
      soluta beatae. Exercitationem inventore, perspiciatis obcaecati maiores
      adipisci, labore a debitis, ducimus omnis possimus libero qui corrupti
      dolorum autem sapiente. Cumque deleniti possimus voluptate quae sapiente,
      eaque natus exercitationem quidem similique doloremque repellendus quam
      vitae impedit necessitatibus quaerat quos veniam repellat fugiat excepturi
      sunt assumenda explicabo quis officia. Iste vel quidem eveniet corrupti
      reprehenderit molestiae animi, ipsam minima debitis? Quae laborum a at.
      Consequuntur maiores soluta eligendi facilis earum quae dolorem tempore
      in. Provident dolor rerum expedita incidunt enim voluptatum consequuntur
      vel sequi labore pariatur ipsa, officia praesentium numquam. Dolorum vel
      mollitia quasi perferendis labore, velit exercitationem eius officiis
      distinctio? Obcaecati, omnis ipsum, architecto adipisci quas nemo
      cupiditate aperiam quia a cum quibusdam exercitationem incidunt non natus
      ipsa facilis excepturi necessitatibus optio aut quidem aspernatur laborum.
      Saepe repellendus suscipit in blanditiis eveniet voluptates
      exercitationem. Animi fugiat perferendis similique saepe necessitatibus
      porro repellendus rerum ratione.
      {/* {chats.map((chat) => (
        <div key={chat.id} className="grid items-center">
          {chat.human === undefined ? null : (
            <ChatCard
              type="human"
              header={chat.human.question}
              date={chat.human.date}
            />
          )}

          {chat.bot === undefined ? (
            <ChatCardLoadding />
          ) : (
            <ChatCard
              type="bot"
              header={chat.bot.answer}
              date={chat.bot.date}
            />
          )}
        </div>
      ))} */}
    </div>
  );
};

export default MainChat;
