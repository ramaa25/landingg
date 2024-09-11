import React from 'react';
import Section from './Section';
import SortDropdown from './SortBy';
import VariantList from './VariantList';
import VariantImg from './VariantImg';
import VariantMore from './VariantMore';
import { Search } from 'lucide-react';

const SectionVariants = () => {
    const [variants, setVariants] = React.useState('EDT');

    return (
        <Section 
            header={
            <div className='flex justify-between h-full flex-wrap gap-3'>
                <div className="grid h-full place-self-center w-full md:w-fit pb-5 md:p-0">
                    <h1 className='text-4xl text-center md:text-start md:text-5xl font-bold'>Types</h1>
                </div>
                <div className="flex items-center gap-5 mx-auto md:m-0">
                    <div className="border-2 border-secondary rounded-full hidden md:flex gap-2 px-5 p-2">
                        <Search className='text-secondary'/>
                        <input type="text" className='bg-transparent border-transparent outline-none placeholder:text-sm' placeholder='Search variants and more...'/>
                    </div>
                    <div className="">
                        <SortDropdown />
                    </div>
                </div>
            </div>
            }>
            <div className="w-full py-5 grid md:grid-cols-2 xl:grid-cols-[1fr_2fr_1fr] gap-5 md:grid-flow-col-dense">
                <VariantList variants={variants} setVariants={setVariants} />
                <VariantImg variants={variants} />
                <VariantMore variants={variants} />
            </div>
        </Section>
    )
}

export default SectionVariants;