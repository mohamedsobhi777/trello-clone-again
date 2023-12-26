import { FormDelete } from "./form-delete";
import { deleteBoard } from "@/actions/delete-board";

interface BoardProps {
    title: string;
    id: string;
}

export const Board = ({ title, id }: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);

    return (
        <form
            action={deleteBoardWithId}
            className="flex items-center gap-x-2"
        >
            <p>Board title: {title}</p>
            <FormDelete />
        </form>
    )
}