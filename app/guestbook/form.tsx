import { saveGuestbookEntry } from '../db/actions';
import { SignIn, SignOut } from './buttons';
import { auth } from 'app/auth';
import { SubmitButton } from './submit-button';

export async function Form() {
  let session = await auth();

  if (!session?.user) {
    return <SignIn />;
  }

  return (
    <>
      <form className="relative max-w-[500px]" action={saveGuestbookEntry}>
        <input
          aria-label="Your message"
          placeholder="Your message..."
          name="entry"
          type="text"
          required
          className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
        <SubmitButton />
      </form>
      <SignOut />
    </>
  );
}
