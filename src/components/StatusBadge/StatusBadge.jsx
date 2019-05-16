import React from 'react';
import { Badge } from 'reactstrap';
import { Statuses } from '../../enums';

export function StatusBadge({ type }) {
    return (
        <Badge color={ColorMap[type]}>{type}</Badge>
    )
}

const ColorMap = {
    [Statuses.Open]: 'primary',
    [Statuses.InProgress]: 'warning',
    [Statuses.Completed]: 'success',
    [Statuses.Closed]: 'danger',
}
