/** Styles */
import './styles/departmentCard.scss';

export const DepartmentCard = ({ type, persons }) => {
	return (
		<div className={'departmentCard'}>
			<div className={'departmentCard__type'}>{type}</div>
			{persons.map((collaborator) => {
				return (
					<div className={'departmentCard__collaborator'}>
						<span>{collaborator.name}</span>
						<span>{collaborator.role}</span>
					</div>
				);
			})}
		</div>
	);
};
