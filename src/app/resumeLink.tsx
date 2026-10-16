// Web version of the resume (email, LinkedIn and GitHub only). Replace the file to update it.
const RESUME_HREF = '/Ray_Coti_Resume.pdf';

interface ResumeLinkProps {
  label?: string;
}

// Outlined accent button, matching the project link buttons. Opens the PDF in a new tab.
const ResumeLink = ({label = 'Resume'}: ResumeLinkProps) => (
  <a
    href={RESUME_HREF}
    target='_blank'
    rel='noopener noreferrer'
    className='inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-card px-4 py-2 font-heading font-bold text-accent transition-colors hover:bg-accent hover:text-white'
  >
    {label} <span className='text-sm font-normal'>(PDF)</span>
    <span className='sr-only'> (opens in a new tab)</span>
  </a>
);

export default ResumeLink;
