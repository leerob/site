import { StackIcon, STACKS } from '@/app/ui/StackIcon';

export function Stacks() {
  return (
    <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
      {STACKS.filter((el) => el.featured).map((el, index) => (
        <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
      ))}
    </div>
  );
}
