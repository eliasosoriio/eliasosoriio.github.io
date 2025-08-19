
import { Avatar } from "flowbite-react";

export function Profile({avatar, name, job}) {
  return (
    <Avatar size="lg" img={avatar} rounded>
      <div className="space-y-1 font-medium text-start">
        <div className="text-primary-gray">{name}</div>
        <div className="text-sm text-primary-dark">{job}</div>
      </div>
    </Avatar>
  );
}
