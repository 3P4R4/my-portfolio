import { Article } from "./Article";
import { SectionHeader } from "./Sectionheader";

export const Postrecientes= () => {
    return (
      <section className='bg-blue-100'>
        <div className='max-w-4xl mx-auto py-12 mt-12'>
            <SectionHeader title='Post reciente' href='#'/>
            <div className='grid grid-cols-2 gap-6'>
                <Article/>
                <Article/>
            </div>
        </div>
      </section>
    );
  }