import React, { useState } from 'react';

import { Modal, Input, Button, Card, Tag } from 'antd';

import { usePageData } from '../../hooks/usePage';
import { IPageData } from '../../interfaces/page';

const modals = {
  basic: 'basic',
  withText: 'withText',
  withHeader: 'withHeader',
  withCustomHeader: 'withCustomHeader',
  withFooter: 'withFooter',
  withOverlayClose: 'withOverlayClose',
  withCloseBtn: 'withCloseBtn',
  withCustomCloseBtn: 'withCustomCloseBtn',
  withDefaultOverlay: 'withDefaultOverlay',
  withNoOverlay: 'withNoOverlay',
  withOverlayWithoutClose: 'withOverlayWithoutClose',
  withCustomWidth: 'withCustomWidth',
  withFullWidth: 'withFullWidth',
  withCustomHeight: 'withCustomHeight',
};

const pageData: IPageData = {
  fulFilled: true,
  loaded: true,
  title: 'Modals',
  breadcrumbs: [
    {
      title: 'UI Kit',
      route: 'default-dashboard',
    },
    {
      title: 'Components',
      route: 'default-dashboard',
    },
    {
      title: 'Modals',
    },
  ],
};

const ModalsPage = () => {
  usePageData(pageData);
  const [opened, setOpened] = useState('');

  function openModal(modalName: string) {
    return () => {
      setOpened(modalName);
    };
  }

  function isOpened(modalName: string) {
    return modalName === opened;
  }

  function closeModal() {
    setOpened(null);
  }

  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Card title='Custom content'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modals.withText)}>
                With text
              </Button>

              <Button type='primary' onClick={openModal(modals.withHeader)}>
                With header
              </Button>

              <Button type='primary' onClick={openModal(modals.withCustomHeader)}>
                With custom header
              </Button>

              <Button type='primary' onClick={openModal(modals.withFooter)}>
                With custom footer
              </Button>
            </div>
            <Modal
              visible={isOpened(modals.withText)}
              footer={null}
              closable={false}
              title={null}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>
            </Modal>

            <Modal
              visible={isOpened(modals.withHeader)}
              footer={null}
              closable={false}
              title='Modal with header'
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withCustomHeader)}
              footer={null}
              closable={false}
              title={
                <>
                  <span>Modal with custom header</span> <Tag color='red'>New</Tag>
                </>
              }
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withFooter)}
              closable={false}
              title={null}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>

          <Card title='Overlay' className='mb-md-0'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modals.withDefaultOverlay)}>
                Default overlay
              </Button>

              <Button type='primary' onClick={openModal(modals.withNoOverlay)}>
                Without overlay
              </Button>

              <Button type='primary' onClick={openModal(modals.withOverlayWithoutClose)}>
                overlay without close
              </Button>
            </div>

            <Modal
              visible={isOpened(modals.withDefaultOverlay)}
              title='Modal with default overlay'
              closable={false}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withNoOverlay)}
              footer={null}
              mask={false}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withOverlayWithoutClose)}
              closable={true}
              maskClosable={false}
              title='Overlay withount close'
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>
        </div>

        <div className='col-sm-12 col-md-6'>
          <Card title='Close options'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modals.withOverlayClose)}>
                With overlay close
              </Button>

              <Button type='primary' onClick={openModal(modals.withCloseBtn)}>
                With close btn
              </Button>

              <Button type='primary' onClick={openModal(modals.withCustomCloseBtn)}>
                With custom close btn
              </Button>
            </div>

            <Modal
              visible={isOpened(modals.withOverlayClose)}
              footer={null}
              closable={false}
              title={'Modal with overlay close'}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withCloseBtn)}
              footer={null}
              closable={true}
              title='Modal with close btn'
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withCustomCloseBtn)}
              closable={false}
              title='Modal with custom close'
              cancelButtonProps={{ danger: true }}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>

          <Card title='Width & height' className='mb-0'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modals.withCustomWidth)}>
                Custom width
              </Button>

              <Button type='primary' onClick={openModal(modals.withFullWidth)}>
                Full width
              </Button>

              <Button type='primary' onClick={openModal(modals.withCustomHeight)}>
                With custom height
              </Button>
            </div>
            <Modal
              visible={isOpened(modals.withCustomWidth)}
              footer={null}
              width='50%'
              closable={false}
              title={null}
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withFullWidth)}
              footer={null}
              closable={false}
              width='95%'
              title='Modal with header'
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={isOpened(modals.withCustomHeight)}
              footer={null}
              closable={false}
              bodyStyle={{ height: 500, maxHeight: '100%', overflow: 'auto' }}
              title='Modal with custom height'
              onCancel={closeModal}
            >
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ModalsPage;
