import { render, screen, fireEvent } from '@testing-library/react'
import { TeamMemberCard } from './TeamMemberCard'
import { it, expect } from 'vitest'


//truncate function is tested in happy path
//ensure frontend handles extreme blurb length
it('handles a large blurb', () => {
    const bigBlurb = 'blah'.repeat(500)
    render(<TeamMemberCard member={{ id: '1', name : 'Test', role: 'Tester', blurb: bigBlurb}} />)
    const blurbPre = screen.getByTestId('memberBlurb')
    expect(screen.getByTestId('truncator')).toBeInTheDocument()
    expect(blurbPre.textContent!.length).toBeLessThan(bigBlurb.length)

})