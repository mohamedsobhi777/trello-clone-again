
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { Board } from './board';
import Form from './form';

type Props = {}

const OrganizationIdPage = async (props: Props) => {

    const boards = await db.board.findMany();

    return (
        <div className='flex flex-col space-y-4'>
            <Form />
            <div className='space-y-2'>

                {
                    boards.map((board) => (
                        <Board key={board.id} title={board.title} id={board.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default OrganizationIdPage