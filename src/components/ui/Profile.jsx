
import { Avatar } from "flowbite-react";

export function Profile({avatar, name, job}) {
  return (
    <Avatar size="xl" img={avatar} rounded>
      <div className="space-y-1 font-medium text-start">
        <div className="text-2xl text-primary-gray">{name}</div>
        <div className="text-lg text-primary-dark">{job}</div>
      </div>
    </Avatar>
  );
}
