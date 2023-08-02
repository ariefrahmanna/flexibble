'use client';

import { deleteProject, fetchToken } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const [isDeleteing, setIsDeleteing] = useState(false);

  const handleDeleteProject = async () => {
    setIsDeleteing(true);

    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);

      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteing(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencil.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        type="button"
        className={`flexCenter delete-action_btn ${
          isDeleteing ? 'bg-gray' : 'bg-primary-purple'
        }`}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
};

export default ProjectActions;
