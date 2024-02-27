import React from 'react';

function TechnologyUsed({TechnologyUsed}) {
  return (
    <li class="mr-1.5 mt-2">
      <div class="flex items-center rounded-full bg-zinc-600/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-700 ">{TechnologyUsed}</div>
    </li>
  );
}

export default TechnologyUsed;
